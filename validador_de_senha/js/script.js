function validarSenha() {
    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;     // validando a senha

    if (regex.test(senha)) {
        resultado.textContent = "A senha é válida!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.";
        resultado.style.color = "red";
    }
}