async function obterRepositorios(usuario) {     // função assíncrona para obter repositórios de um usuário do GitHub    
    const url = `https://api.github.com/users/${usuario}/repos`;        // definindo a URL da API do GitHub para buscar os repositórios do usuário
    
    const reposContainer = document.getElementById('reposContainer');       // pegando o elemento de id 'reposContainer'  onde os repositórios serão exibidos
    
    reposContainer.innerHTML = '';    // limpando resultados anteriores

    try {
        const resposta = await fetch(url);        // fazendo a requisição à API usando 'fetch' e aguardando a resposta na constante resposta
        
        if (!resposta.ok) {        // verifica se a resposta da API foi bem-sucedida
            throw new Error('Erro ao buscar repositórios');
        }
        
        const repositorios = await resposta.json();     // convertendo a resposta em JSON
        
        repositorios.forEach(repo => {      // Exibindo informações dos repositórios
            const repoDiv = document.createElement('div');
            repoDiv.className = 'repo';     // adicionando uma classe 'repo'
            
            // preenche a div com informações do repositório
            repoDiv.innerHTML = `
                <strong>Nome:</strong> ${repo.name}<br>
                <strong>Descrição:</strong> ${repo.description || 'Sem descrição'}<br>
                <strong>Linguagem:</strong> ${repo.language || 'Não especificada'}<br>
                <strong>Estrelas:</strong> ${repo.stargazers_count}<br>
            `;
            
            reposContainer.appendChild(repoDiv);
        });
    } catch (erro) {        
        reposContainer.innerHTML = `<p style="color: red;">${erro.message}</p>`;        // se ocorrer erro durante a requisição ou processamento
    }
}

document.getElementById('fetchButton').addEventListener('click', () => {        // adicionando um evento de click no elemento de id 'fetchButton'
    const usuario = document.getElementById('username').value;
    
    if (usuario) {      // verificando se o nome foi fornecido
        obterRepositorios(usuario);     // chama a função que obterá os repositórios
    } else {
        alert('Por favor, informe um nome de usuário.');        // caso contrario é exibido um 'alert' com essa menssagem
    }
});