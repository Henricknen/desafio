async function carregarDados() {        // função para ler o arquivo 'sales.csv' e processar os dados
    const response = await fetch('sales.csv');
    const data = await response.text();
    return processarCSV(data);
}

function processarCSV(data) {       // função para processar os dados armazenados em 'data'
    const linhas = data.split('\n').slice(1);       // ignora o cabeçalho
    const vendas = [];

    linhas.forEach(linha => {       // utilizando 'forEach' para percorrer as linhas da constante 'linhas'
        const colunas = linha.split(',');
        if (colunas.length > 1) {
            vendas.push({
                region: colunas[0],
                country: colunas[1],
                itemType: colunas[2],
                salesChannel: colunas[3],
                orderPriority: colunas[4],
                orderDate: colunas[5],
                orderID: colunas[6],
                shipDate: colunas[7],
                unitsSold: parseInt(colunas[8]),
                unitPrice: parseFloat(colunas[9]),
                unitCost: parseFloat(colunas[10]),
                totalRevenue: parseFloat(colunas[11]),
                totalCost: parseFloat(colunas[12]),
                totalProfit: parseFloat(colunas[13])
            });
        }
    });

    return vendas;
}

function calcularEstatisticas(vendas) {     // função que calcular as estatísticas
    const estatisticas = {
        porProduto: {},
        porRegiao: {},
        maiorReceitaPorPais: {}
    };

    vendas.forEach(venda => {
        const { itemType, unitsSold, totalRevenue, totalCost, totalProfit, region, country } = venda;

        if (!estatisticas.porProduto[itemType]) {               // estatísticas por tipo de produto
            estatisticas.porProduto[itemType] = {
                totalUnidades: 0,
                totalReceita: 0,
                totalCusto: 0,
                totalLucro: 0
            };
        }

        estatisticas.porProduto[itemType].totalUnidades += unitsSold;
        estatisticas.porProduto[itemType].totalReceita += totalRevenue;
        estatisticas.porProduto[itemType].totalCusto += totalCost;
        estatisticas.porProduto[itemType].totalLucro += totalProfit;

        if (!estatisticas.porRegiao[itemType]) {        // estatísticas por região
            estatisticas.porRegiao[itemType] = {};
        }

        if (!estatisticas.porRegiao[itemType][region]) {
            estatisticas.porRegiao[itemType][region] = 0;
        }

        estatisticas.porRegiao[itemType][region] += unitsSold;

        if (!estatisticas.maiorReceitaPorPais[country] || estatisticas.maiorReceitaPorPais[country].totalRevenue < totalRevenue) {        // maior receita por país
            estatisticas.maiorReceitaPorPais[country] = {
                itemType,
                totalRevenue
            };
        }
    });

    return estatisticas;
}

function exibirResultados(estatisticas) {       // função para exibir os resultados
    const resultadosDiv = document.getElementById('resultados');

    resultadosDiv.innerHTML += '<h2>Vendas por Tipo de Produto</h2>';       // vendas por tipo de produto
    let tabelaProduto = '<table><tr><th>Produto</th><th>Unidades Vendidas</th><th>Receita Total</th><th>Custo Total</th><th>Lucro Total</th></tr>';
    for (const produto in estatisticas.porProduto) {
        const { totalUnidades, totalReceita, totalCusto, totalLucro } = estatisticas.porProduto[produto];
        tabelaProduto += `<tr><td>${produto}</td><td>${totalUnidades}</td><td>${totalReceita.toFixed(2)}</td><td>${totalCusto.toFixed(2)}</td><td>${totalLucro.toFixed(2)}</td></tr>`;
    }

    tabelaProduto += '</table>';
    resultadosDiv.innerHTML += tabelaProduto;

    resultadosDiv.innerHTML += '<h2>Vendas por Tipo de Produto e Região</h2>';      // vendas por tipo de produto e região
    let tabelaRegiao = '<table><tr><th>Produto</th><th>Região</th><th>Unidades Vendidas</th></tr>';
    for (const produto in estatisticas.porRegiao) {
        for (const regiao in estatisticas.porRegiao[produto]) {
            tabelaRegiao += `<tr><td>${produto}</td><td>${regiao}</td><td>${estatisticas.porRegiao[produto][regiao]}</td></tr>`;
        }
    }

    tabelaRegiao += '</table>';
    resultadosDiv.innerHTML += tabelaRegiao;

    resultadosDiv.innerHTML += '<h2>Tipo de Produto com Maior Receita por País</h2>';       // tipo de produto com maior receita de cada país
    let tabelaMaiorReceita = '<table><tr><th>País</th><th>Produto</th><th>Receita Total</th></tr>';
    for (const pais in estatisticas.maiorReceitaPorPais) {
        const { itemType, totalRevenue } = estatisticas.maiorReceitaPorPais[pais];
        tabelaMaiorReceita += `<tr><td>${pais}</td><td>${itemType}</td><td>${totalRevenue.toFixed(2)}</td></tr>`;
    }

    tabelaMaiorReceita += '</table>';
    resultadosDiv.innerHTML += tabelaMaiorReceita;
}

async function main() {     // função principal
    const vendas = await carregarDados();
    const estatisticas = calcularEstatisticas(vendas);
    exibirResultados(estatisticas);
}

main();     // executando a função principal