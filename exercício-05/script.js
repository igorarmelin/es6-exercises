const numeros = [1,2,3,3,4,5]

const removeDuplicatas = numeros.reduce((item, itemProximo) => {

    if(!item.find( item => item == itemProximo)) {
        item.push(itemProximo);
    }
    return item;
    
}, []);

console.log(removeDuplicatas)