const teclasNum = [...document.querySelectorAll(".num")];      // pegando todas as teclas que têm a classe 'num'
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector(".res");       // apenas uma tecla de resultado, então usamos querySelector
const display = document.querySelector(".display");
const ton = document.getElementById("ton");
const tlimpar = document.getElementById("tlimpar");
const tigual = document.getElementById("tigual");

let sinal = false;
let decimal = false;

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {     // adicionando evento de click
        sinal = false;        
        if(evt.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true;
                if(display.innerHTML == "0") {
                    display.innerHTML = "0,";
                } else {                    
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            if(display.innerHTML == "0") {
                display.innerHTML = "";
            }
            display.innerHTML += evt.target.innerHTML;
        }
    });
});

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal) {
            sinal = true;
            if(display.innerHTML == "0") {
                display.innerHTML = "";
            }
            if(evt.target.innerHTML == "x") {
                display.innerHTML += "*";
            } else {
                display.textContent += evt.target.innerHTML;      // adiciona o operador no display
            }
        }
    });
});

tlimpar.addEventListener("click", () => {
    sinal = false;
    decimal = false;
    display.textContent = "0";  // reseta o display para "0" ao clicar no botão de limpar
});

tigual.addEventListener("click", () => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);        // utilizando função 'eval' para avaliar a expressão de entrada e executar-la(resolvendo)
    display.innerHTML = res;
});