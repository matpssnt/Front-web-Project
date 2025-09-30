import { clientRequest } from "../api/clientsAPI.js";

import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderRegisterPage() {
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);


    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';
    
    const footer = Footer();
    pezin.appendChild(footer);
    

    const formu = Form();

    const titulo = formu.querySelector('h1');
    titulo.textContent = 'Crie uma conta';
    titulo.className = 'titulo';


    const contentForm = formu.querySelector('form');


    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Digite o seu nome';
    inputNome.className = 'input';

    const inputCpf = document.createElement('input');
    inputCpf.type = 'text';
    inputCpf.placeholder = 'Digite o seu CPF';
    inputCpf.className = 'input';

    const inputTelf = document.createElement('input');
    inputTelf.type = 'text';
    inputTelf.placeholder = 'Digite o seu telefone';
    inputTelf.className = 'input';


    const inputEmail = formu.querySelector('input[type="email"]');
    const inputSenha = formu.querySelector('input[type="password"]')

    inputEmail.className = 'input';
    inputSenha.className = 'input';

    contentForm.insertBefore(inputNome, inputEmail);
    contentForm.insertBefore(inputCpf, contentForm.children[1]);
    contentForm.insertBefore(inputTelf, contentForm.children[2]);

    const confPassword = document.createElement('input');
    confPassword.type = 'password';
    confPassword.placeholder = "Confirme a senha";
    confPassword.className = 'input';

    contentForm.insertBefore(confPassword, contentForm.children[5]);

    const btnRegister = formu.querySelector('button');
    btnRegister.textContent = "Criar conta";

    // Monitora o clique no botão para acionar um evento de submeter os dados do formulário
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = inputNome.value.trim();
        const cpf = inputCpf.value.trim();
        const telefone = inputTelf.value.trim();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        try {
            const result = clientRequest(nome, cpf, telefone, email, senha);
            //saveToken(result.token);
            //window.location.pathname = "/Possonato/home"
        }
        catch {
            console.log("Erro inesperado!")
        }
    })

}