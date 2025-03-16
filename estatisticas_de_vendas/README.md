### Testar em Ambiente Local

O método `fetch` pode não funcionar corretamente ao abrir arquivos HTML diretamente no navegador devido a restrições de CORS (Cross-Origin Resource Sharing). Para evitar isso, utilize um servidor local.

#### Opções para Servidor Local

1. **Extensão do Visual Studio Code**:
   - A extensão `Live Server` é uma maneira prática de criar um servidor local. Após instalá-la, você pode clicar com o botão direito no seu arquivo HTML e selecionar "Open with Live Server". Isso iniciará um servidor local e abrirá seu projeto no navegador.

2. **XAMPP**:
   - O XAMPP é uma solução completa que inclui o Apache, MySQL e PHP. Para usá-lo:
     - Instale o XAMPP e inicie o módulo Apache.
     - Coloque seus arquivos na pasta `htdocs` do XAMPP.
     - Acesse seus arquivos através do navegador usando `http://localhost/estatisticas_de_vendas/`.
