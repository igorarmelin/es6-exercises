class VideoGame{
    constructor(marca, controles, midia){
        this.marca = marca
        this.controles = controles
        this.midia = midia
    }
}

let objVideoGame = new VideoGame('Super Nintendo', 2, 'Fita')
console.log(objVideoGame)