const parenteses = '()()()'

const validaParenteses = parenteses.split('').reduce((itemAnterior, itemAtual) => {
    if(itemAnterior != itemAtual) {
        return true
    } else {
        return false
    }
})