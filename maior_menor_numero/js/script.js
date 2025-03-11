function encontrarMaiorEMenor() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);

    let maior = Math.max(numero1, numero2, numero3);        // método 'Math.max' retorna o maior valor entre os numeros fornecido como parâmetros
    let menor = Math.min(numero1, numero2, numero3);

    alert("O maior número é: " + maior);        // exibindo um 'alert' com o maior número
    alert("O menor número é: " + menor);
}