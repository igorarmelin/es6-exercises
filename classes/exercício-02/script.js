class VideoGame{
    constructor(marca, controles, midia){
        this.marca = marca
        this.controles = controles
        this.midia = midia
    }
}

class Playstation extends VideoGame{
    constructor(marca, controles, midia, entradasUSB, voltagem, adicionais) {
        super(marca, controles, midia)
        this.entradasUSB = entradasUSB
        this.voltagem = voltagem
        this.adicionais = adicionais
    }
}

let videoGame = new Playstation('PlayStation', 2, 'DVD', 4, 220, ['Volante'])