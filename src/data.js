const dataOrder = {
  searchCharacter: function (printCharacter, searchValue) {
    let searchName = printCharacter.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
    return searchName;
  },
  //ordenar de la A a la Z
  orderAZ: function (printCharacter) {
    let orderedResults = printCharacter.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return orderedResults;
  },
  //ordenar de la Z a la A
  orderZA: function (printCharacter) {
    let orderedResults = printCharacter.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return orderedResults;
  },
  //Ordenar default
  orderDefault: function (printCharacter) {
    let orderedResults = printCharacter.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      } else {
        return -1;
      }
    });
    return orderedResults;
  },

  //Funcion especie
  specieResults(printCharacter, species) {
    let onlySpecie = printCharacter.filter((printCharacter) => {
      return printCharacter.species === species;
    });
    return onlySpecie;
  },
  //funcion estado del personaje

  stateResults(printCharacter, state) {
    let onlyState = printCharacter.filter((printCharacter) => {
      return printCharacter.status === state;
    });
    return onlyState;
  },
};
export default dataOrder;
