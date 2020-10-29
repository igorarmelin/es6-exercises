const criaIterador = lista => {
    var proximoIndice = 0;

    return {
       next: function() {
           if(proximoIndice < lista.length) {
                return { value: lista[proximoIndice++], done: false };
           } else {
                return { value: undefined, done: true };
           }
       }
    };

}