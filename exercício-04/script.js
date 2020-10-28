const validaParenteses = parenteses => {
    const arrayParenteses = parenteses.split(""); 

    const verificaParenteses =  !arrayParenteses.reduce(function(anterior, atual) {
      if(anterior < 0) { return anterior } // para o caso de começar com ")"
      if(atual ===  "(") { return ++anterior }
      if(atual ===  ")") { return --anterior }
    }, 0);
  
    return verificaParenteses;
}