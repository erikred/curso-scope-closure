function createPetList() {
    // Tu código aquí 👈
    const petList = [];
    function addPet(myPet) {
      if (myPet) {
        petList.push(myPet);
      }
      return petList;
    }
    return addPet;
  }