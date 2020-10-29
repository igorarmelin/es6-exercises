const soletraPalavra = palavra => {
    var iterador = palavra[Symbol.iterator]();
    var letra = iterador.next();
    do {
        console.log(letra.value);
        letra = iterador.next();
    } while (!letra.done);
}