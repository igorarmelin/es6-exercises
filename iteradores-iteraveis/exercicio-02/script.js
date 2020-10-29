const isListaVazia = listaInteiros => {
    var iterador = listaInteiros[Symbol.iterator]()
    var proximo = iterador.next()
    var done = proximo.done

    return done
}