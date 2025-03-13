function calcularFinanciamento(event) {
    event.preventDefault();     // impede o envio do formulário

    const valor = parseFloat(document.getElementById('valor').value);
    const taxaAnual = parseFloat(document.getElementById('taxa').value) / 100;      // taxa nominal anual
    const parcelas = parseInt(document.getElementById('parcelas').value);

    const taxaMensal = Math.pow(1 + taxaAnual, 1/12) - 1;       // cálculando a taxa efetiva mensal 'im'

    const parcela = valor * (taxaMensal / (1 - Math.pow(1 + taxaMensal, -parcelas)));       // Cálculando o valor da parcela 'PMT'

    const CET = (parcela * parcelas) - valor;       // cálculo do custo efetivo total 'CET'

    const totalPago = parcela * parcelas;       // total a ser pago

    const resultadoDiv = document.getElementById('resultado');      // exibindo os resultados
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Valor da Parcela: R$ ${parcela.toFixed(2)}</p>
        <p>Valor Total a ser Pago: R$ ${totalPago.toFixed(2)}</p>
        <p>Custo Efetivo Total (CET): R$ ${CET.toFixed(2)}</p>
        <p>Taxa Efetiva Mensal: ${taxaMensal.toFixed(4) * 100}%</p>
    `;
}