import data from "./data/rickandmorty/rickandmorty.js";
import dataOrder from "./data.js";
//traer datos de rickandmorty.js
let printCharacter = data.results;

//-----------------Imprimir personajes----------------------//
const listCharacters = document.getElementById("characterCard");
const characterList = function (characters) {
  //declarar variable para imprimir personajes
  let list = "";
  document.getElementById("characterCard").innerHTML = "";
  //inicia
  for (let i = 0; i < characters.length; i++) {
    list += `
    <div class= "cardContainer">
      <div id="printCharacters" class="cardContainer-inner">
        <div class="frontCard">
          <img id="photo" class="photo" src="${characters[i].image}"/>
          <div class="nametag">
          <p id="nameChar" class="name-frontcard">${characters[i].name}</p>
          </div>
        </div>
        <div class="backCard">
              <p id="nameChar" class="name-backcard">${characters[i].name}</p>
            <div class="infoChar"> 
              <div class="propertyFlex">
               <p class="propertyStyle">Gender: </p>
               <p id="genderChar" class="cardText">${characters[i].gender}</p><br>
              </div>
              <div class="propertyFlex">
               <p class="propertyStyle">Status: </p>
               <p id="statusChar" class="cardText">${characters[i].status}</p><br>
              </div>
              <div class="propertyFlex">
               <p class="propertyStyle">Specie: </p>
               <p id="specieChar" class="cardText">${characters[i].species}</p><br>
              </div>
              <div class="propertyFlex">
               <p class="propertyStyle">Origin: </p>
               <p id=originChar" class="chardText">${characters[i].origin.name}</p><br>
              </div>
            </div>
        </div>
      </div>
    </div>`;
  }
  document.getElementById("characterCard").innerHTML = list;
};
characterList(printCharacter);

//-------------Boton search---------------//
const searchBtn = document.getElementById("searchbtn");
searchBtn.addEventListener("keyup", function (e) {
  const searchTarget = e.target.value;
  let searchData = dataOrder.searchCharacter(printCharacter, searchTarget);
  characterList(searchData);
});

//---------------Orden alfabetico---------------//
const alphabeticalOrder = document.getElementById("orderAlphabetically");
alphabeticalOrder.addEventListener("change", function () {
  if (alphabeticalOrder.value === "azOrder") {
    listCharacters.innerHTML = "";
    let array = dataOrder.orderAZ(printCharacter);
    printCharacter = array;
    characterList(printCharacter);
  } else if (alphabeticalOrder.value === "zaOrder") {
    let array = dataOrder.orderZA(printCharacter);
    printCharacter = array;
    characterList(printCharacter);
  } else if (alphabeticalOrder.value === "default") {
    let array = dataOrder.orderDefault(printCharacter);
    printCharacter = array;
    characterList(printCharacter);
  }
});

//----------CAJA DE FILTROS-----------//

const chHuman = document.querySelector("#humanCheck");
chHuman.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    //se produce un evento que cambia al hacer checked
    //y compara la igualdad de dos objetos sin forzar la conversión automática.
    listCharacters.innerHTML = "";
    let species = "Human";
    let onlyHuman = dataOrder.specieResults(printCharacter, species);
    characterList(onlyHuman);
  } else {
    characterList(printCharacter);
  }
});
const chAlien = document.querySelector("#alienCheck");
chAlien.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    listCharacters.innerHTML = "";
    let species = "Alien";
    let onlyAlien = dataOrder.specieResults(printCharacter, species);
    characterList(onlyAlien);
  } else {
    characterList(printCharacter);
  }
});
const chUnknown = document.querySelector("#unknownCheck");
chUnknown.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    listCharacters.innerHTML = "";
    let species = "unknown";
    let onlyUnknown = dataOrder.specieResults(printCharacter, species);
    characterList(onlyUnknown);
  } else {
    characterList(printCharacter);
  }
});
const chAlive = document.querySelector("#aliveCheck");
chAlive.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    listCharacters.innerHTML = "";
    let state = "Alive";
    let onlyAlive = dataOrder.stateResults(printCharacter, state);
    characterList(onlyAlive);
  } else {
    characterList(printCharacter);
  }
});
const chDead = document.querySelector("#deadCheck");
chDead.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    listCharacters.innerHTML = "";
    let state = "Dead";
    let onlyDead = dataOrder.stateResults(printCharacter, state);
    characterList(onlyDead);
  } else {
    characterList(printCharacter);
  }
});
const chUnknownState = document.querySelector("#unknownCheckState");
chUnknownState.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    listCharacters.innerHTML = "";
    let state = "unknown";
    let onlyUnknownState = dataOrder.stateResults(printCharacter, state);
    characterList(onlyUnknownState);
  } else {
    characterList(printCharacter);
  }
});
//----------BOTON EPISODES--------//

const btnEpisodes= document.getElementById('episodesbtn');
const wrapEpisodes= document.getElementById('wrapEpisodes');
const characterBtn= document.getElementById('characterBtn');
const main = document.getElementById('mainCharacters');
btnEpisodes.addEventListener("click", function(){
  main.hidden = true;
  wrapEpisodes.hidden = false;
  btnEpisodes.hidden = false;
  characterBtn.hidden = false;
},
)
characterBtn.addEventListener('click', function() {
  main.hidden = false;
  wrapEpisodes.hidden = true;
  btnEpisodes.hidden = false;
  characterBtn.hidden = true;
})

btnEpisodes.addEventListener("click", function(){
  let url = 'https://rickandmortyapi.com/api/episode'
  fetch(url)
  .then(response => response.json())
  .then(data =>  data.results)
  .then(result => result.map(episode => {
    const listEpisodes = document.getElementById('episodes');
    listEpisodes.innerHTML += `
    <div class="episodesContainer">
      <ol>
        <li>Name: ${episode.name}</li>
        <li>Created: ${episode.created}</li>
        <li>Url: ${episode.url}</li>
      </ol>
    </div>
    `
   
  })); 
})

//-------------ADD HBO-------------//
const buttonAdd = document.getElementById("addHBO");
buttonAdd.addEventListener("click", function () {
  location.href =
    "https://www.hbomax.com/cl/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ?countryRedirect=1";
});

