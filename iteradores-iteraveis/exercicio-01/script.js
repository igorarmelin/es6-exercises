var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
];

const calculaDistancia = listaObj => {
    var iterador = ruas[Symbol.iterator]()
    var distTotal = 0
    var proximo = iterador.next()
    do {
        distTotal += proximo.value.tamanho
        proximo = iterador.next()
    } while(!proximo.done)

    return distTotal
}