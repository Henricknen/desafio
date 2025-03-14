class TV {      // definindo a classe TV
    constructor(marca) {
        this.marca = marca;
        this.ligada = false;        // estado inicial da TV
    }

    ligar() {
        this.ligada = true;
        return `A TV ${this.marca} está ligada`;
    }

    desligar() {
        this.ligada = false;
        return `A TV ${this.marca} está desligada`;
    }
}

class Controle {        // definindo a classe Controle
    constructor(marca, tvCompatível) {
        this.marca = marca;
        this.tvCompatível = tvCompatível;       // marca da TV com a qual o controle é compatível
    }

    ligarTV(tv) {       // método para ligar a TV
        if (tv.marca === this.tvCompatível) {
            return tv.ligar();
        } else {
            return `Erro: O controle ${this.marca} não é compatível com a TV ${tv.marca}`;
        }
    }

    desligarTV(tv) {        // método para desligar a TV
        if (tv.marca === this.tvCompatível) {
            return tv.desligar();
        } else {
            return `Erro: O controle ${this.marca} não é compatível com a TV ${tv.marca}`;
        }
    }
}

const tvLG = new TV("LG");      // criando instâncias de TVs
const tvSamsung = new TV("Samsung");
const tvSony = new TV("Sony");

const controleLG = new Controle("LG", "LG");        // criando instâncias de controles
const controleSamsung = new Controle("Samsung", "Samsung");
const controleSony = new Controle("Sony", "Sony");

function ligarTV() {        // função para ligar a TV
    const controleSelecionado = document.getElementById("controle").value;
    let resultado;

    switch (controleSelecionado) {
        case "LG":
            resultado = controleLG.ligarTV(tvLG);
            break;
        case "Samsung":
            resultado = controleSamsung.ligarTV(tvSamsung);
            break;
        case "Sony":
            resultado = controleSony.ligarTV(tvSony);
            break;
        default:
            resultado = "Por favor, selecione um controle.";
            break;
    }

    document.getElementById("status").innerText = resultado;        // exibe o resultado na tela
}

function desligarTV() {     // função para desligar a TV
    const controleSelecionado = document.getElementById("controle").value;
    let resultado;

    switch (controleSelecionado) {
        case "LG":
            resultado = controleLG.desligarTV(tvLG);
            break;
        case "Samsung":
            resultado = controleSamsung.desligarTV(tvSamsung);
            break;
        case "Sony":
            resultado = controleSony.desligarTV(tvSony);
            break;
        default:
            resultado = "Por favor, selecione um controle.";
            break;
    }

    document.getElementById("status").innerText = resultado;        // exibe o resultado na tela
}