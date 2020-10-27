/* ## Exercício 11 - A pequena ovelha Dolly
Utilizando o método auxiliar `forEach`, crie uma função `clonaObjeto` que recebe como parâmetro um objeto e cria uma cópia exata dela.
* utilize o método `Object.getOwnPropertyNames` para obter as propriedades do objeto */

const dados = {nome: 'Igor', altura: 1.9, peso: 78}

const clonaObjeto = objeto => {
    const objProperty = Object.getOwnPropertyNames(objeto)
    const objNew = {}

    objProperty.forEach(prop => objNew[prop] = objeto[prop])

    return objNew
}

console.log(clonaObjeto(dados))