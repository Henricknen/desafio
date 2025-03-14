function mostrarInputs() {
    const forma = document.getElementById("forma").value;    // obtém o valor da forma selecionada no menu suspenso
        const inputsDiv = document.getElementById("inputs");    
    inputsDiv.innerHTML = "";       // limpando os inputs anteriores para evitar sobreposição

    if (forma === "quadrado") {         // verificando qual forma foi selecionada
        inputsDiv.innerHTML = `
            <label for="lado">Lado:</label>
            <input type="number" id="lado" required>
        `;
    } else if (forma === "retangulo") {
        inputsDiv.innerHTML = `
            <label for="largura">Largura:</label>
            <input type="number" id="largura" required>
            <label for="altura">Altura:</label>
            <input type="number" id="altura" required>
        `;
    } else if (forma === "triangulo") {
        inputsDiv.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="altura">Altura:</label>
            <input type="number" id="alturaTriangulo" required>
        `;
    } else if (forma === "circulo") {
        inputsDiv.innerHTML = `
            <label for="raio">Raio:</label>
            <input type="number" id="raio" required>
        `;
    }
}

function calculateArea() {      // função para calcular a área
        const forma = document.getElementById("forma").value;
    let area;       // variável para armazenar a área calculada

    if (forma === "quadrado") {
        const lado = document.getElementById("lado").value;
        area = lado * lado;     // calculando a área
    } else if (forma === "retangulo") {
        const largura = document.getElementById("largura").value;
        const altura = document.getElementById("altura").value;
        area = largura * altura;
    } else if (forma === "triangulo") {
        const base = document.getElementById("base").value;
        const altura = document.getElementById("alturaTriangulo").value;
        area = (base * altura) / 2;
    } else if (forma === "circulo") {
        const raio = document.getElementById("raio").value;
        area = Math.PI * raio * raio;
    } else {
        area = "Selecione uma forma geométrica";        // se nenhuma forma for selecionada
    }

    document.getElementById("result").innerText = `Área: ${area}`;      // exibindo o resultado
}