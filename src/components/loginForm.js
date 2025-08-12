export default function LoginForm() {

    const formu = document.createElement('form');
    formu.className = 'd-flex flex-column';
    
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'Digite o seu e-mail';
    formu.appendChild(email);

    const password = document.createElement('input');
    password.type = 'password';
    password.placeholder = 'Digite a senha';
    formu.appendChild(password);

    const btnAuth = document.createElement('button');
    btnAuth.type = 'submit';
    btnAuth.textContent = "Entrar";
    btnAuth.className = 'btn btn-primary';

    formu.appendChild(btnAuth);
    
    return formu;
}