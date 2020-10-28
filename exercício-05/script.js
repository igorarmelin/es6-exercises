const removeDuplicatas = numeros => numeros.reduce((item, itemProximo) => {

    if(!item.find( item => item == itemProximo)) {
        item.push(itemProximo);
    }
    return item;
    
}, []);