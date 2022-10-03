
//trouxe o arquivo do moduleDados. js para index.js
import usuarios from "./moduleDados.js";



const btnEntrar = document.getElementById('btnEntrar')
const alertaLogin = new bootstrap.Modal('#alertaLogin')

btnEntrar.addEventListener("click", () =>{
    const inputLogin = document.getElementById('login').value
    const inputSenha = document.getElementById('senha').value

    let usuarioValido;

    for(let usuario of usuarios) {
        if(usuario.nomeUsuario == inputLogin) {
            usuarioValido = usuario;
            break
        }
    }

    if(inputSenha == usuarioValido.senha) {
        window.location.pathname = '/app.html'
    } else {
 alertaLogin.show()
    }
})
