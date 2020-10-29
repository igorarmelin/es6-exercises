/* Pois o browser por padrão tem o this referenciando o objeto global window. As funções declaradas no escopo global também vai possuir o objeto window como valor do this.

Exemplo:

function x () {
    console.log(this)
}

x() // Window */