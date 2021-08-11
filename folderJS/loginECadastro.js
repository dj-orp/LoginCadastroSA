// Animação JS //
var btnSignIn = document.querySelector("#Logar")
var btnSignUp = document.querySelector("#Cadastrar")

var body = document.querySelector("body")

btnSignIn.addEventListener("click", function(){
    body.className = "logar";
});

btnSignUp.addEventListener("click", function(){
    body.className = "cadastrar";
});

// Animação JS //

