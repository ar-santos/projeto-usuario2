let login = document.getElementById('aba-login')
let card = document.getElementById('card')
let informAddress = document.getElementById('inform-address')
let informSobre = document.getElementById('inform-sobre')
let informCompany = document.getElementById('inform-company')
let btnAddress = document.getElementById('btn-address')
let btnSobre = document.getElementById('btn-sobre')
let btnCompany = document.getElementById('btn-company')
let campoObrigatorio = document.getElementById('campo-obrigatorio')
let abaCadastrar = document.getElementById('aba-cadastrar')
let campoCadastro = document.getElementById('campo-cadastro')

let nome = document.getElementById('input-name')
let labelNome = document.getElementById('name-label')

let usuario = document.getElementById('input-usuario')
let labelUser = document.getElementById('user-label')

let senha = document.getElementById('input-password')
let labelSenha = document.getElementById('senha-label')

function exibirCard() {
    if (login.style.display == 'block') {
        login.style.display = 'none';
        card.style.display = 'block';
    } else { 
        login.style.display = 'none'  
        card.style.display = 'block';
    } 
}

function fecharCard() {
    if (card.style.display == 'block') {
        login.style.display = 'block'
        card.style.display = 'none'
    }
}

function exibirAddress() {
    if (informAddress.style.display == 'block') {
        informAddress.style.display = 'block';
        informSobre.style.display = 'none';
        informCompany.style.display = 'none';
        btnAddress.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnSobre.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }else { 
       informAddress.style.display = 'block'  
       informSobre.style.display = 'none';
       informCompany.style.display = 'none';
       btnAddress.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
       btnSobre.style.background = '#8080804c';
       btnCompany.style.background = '#8080804c';
    } 
 }   


function exibirInformSobre() {
    if (informSobre.style.display == 'block') {
        informCompany.style.display = 'none'
        informSobre.style.display = 'block'
        informAddress.style.display = 'none'
        btnSobre.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnAddress.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }else{
        informCompany.style.display = 'none'
        informSobre.style.display = 'block'
        informAddress.style.display = 'none'
        btnSobre.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnAddress.style.background = '#8080804c';
        btnCompany.style.background = '#8080804c';
    }
}

function exibirInformCompany() {
    if (informCompany.style.display == 'block') {
        informSobre.style.display = 'none'
        informCompany.style.display = 'block'
        informAddress.style.display = 'none'
        btnCompany.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnSobre.style.background = '#8080804c';
        btnAddress.style.background = '#8080804c';
    }else{
        informSobre.style.display = 'none'
        informCompany.style.display = 'block'
        informAddress.style.display = 'none'
        btnCompany.style.background = 'linear-gradient(136deg, rgba(255, 0, 198, 1) 0%, rgba(255, 255, 0, 1) 100%)';
        btnSobre.style.background = '#8080804c';
        btnAddress.style.background = '#8080804c';
    }
}

function campo() {
    if (campoObrigatorio.style.display == 'none') {
       campoObrigatorio.style.display = 'block';
    } else { 
       campoObrigatorio.style.display = 'block'  
    } 
}

function OcultarCampo() {
    if (campoObrigatorio.style.display == 'block') {
       campoObrigatorio.style.display = 'none';
    } else { 
       campoObrigatorio.style.display = 'none'  
    } 
 }

 
function exibirFormLogin() {
    if (login.style.display == 'block') {
        login.style.display = 'block';
        campoCadastro.style.display = 'block'
        abaCadastrar.style.display = 'none';

    } else { 
        login.style.display = 'block';
        campoCadastro.style.display = 'block'
        abaCadastrar.style.display = 'none';  
    } 
}

function exibirCampoCadastro() {
    if (campoCadastro.style.display == 'block') {
        campoCadastro.style.display = 'block'

    } else { 
        campoCadastro.style.display = 'block'
    } 
}

function labelName() {
    if (nome.value.length <= 2) {
        labelNome.style.color = 'red';
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.style.borderBottomColor = 'red';
    } else { 
        labelNome.style.color = 'green';
        labelNome.innerHTML = 'Nome'
        nome.style.borderBottomColor = 'green';
    } 
}

function labelUsuario() {
    if (usuario.value.length <= 4) {
        labelUser.style.color = 'red';
        labelUser.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        usuario.style.borderBottomColor = 'red';
    } else { 
        labelUser.style.color = 'green';
        labelUser.innerHTML = 'Usuário'
        usuario.style.borderBottomColor = 'green';
    } 
}

function confirmSenha() {
    if (senha.value.length <= 7) {
        labelSenha.style.color = 'red';
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
        senha.style.borderBottomColor = 'red';
    } else { 
        labelSenha.style.color = 'green';
        labelSenha.innerHTML = 'Senha'
        senha.style.borderBottomColor = 'green';
    } 
}

const utils =  {
    exibirCard,
    fecharCard,
    exibirAddress,
    exibirInformSobre,
    exibirInformCompany,
    campo,
    OcultarCampo,
    exibirFormLogin,
    exibirCampoCadastro,
    labelName,
    labelUsuario,
    confirmSenha,
 }
 
 export default utils 