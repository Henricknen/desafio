const randomNumber = Math.floor(Math.random() * 100) + 1;       // utilizando função 'random' para gerar um número aleatório entre 1 e 100
let tentativas = 0;

function verificarPalpite() {  
  const num = parseInt(document.getElementById("num").value);       // pegando o 'palpite' do usuário e armazenando na variável num

  if (isNaN(num) || num < 1 || num > 100) {     // verificando se o palpite é válido
    alert("Por favor, insira um número entre 1 e 100.");
    return;
  }

  tentativas++;     // incrementando o número de tentativas

  document.getElementById("tentativas").innerText = tentativas;     // exibindo o número de tentativas

  const menssagem = document.getElementById("msg");

  if (num < randomNumber) {     // comparando o palpite 'num' com o número gerado 'randomNumber'
    menssagem.innerText = "Seu palpite está abaixo!";
    menssagem.style.color = "red";
  } else if (num > randomNumber) {
    menssagem.innerText = "Seu palpite está acima!";
    menssagem.style.color = "red";
  } else {
    menssagem.innerText = `Parabéns! Você adivinhou o número ${randomNumber} em ${tentativas} tentativas`;
    menssagem.style.color = "green";
    document.querySelector("button").disabled = true;       // desabilita o botão quando acertar
  }
}
