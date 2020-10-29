let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

const tamanhos =  palavroes.map(palavrao => palavrao.length );

console.log(tamanhos); // [ 22, 22, 44, 28 ]