export default function Form() {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    
    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '575px';
    divRoot.appendChild(container);


    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça seu login';
    titulo.className = 'titulo';


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

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = "Entrar";
    btn.className = 'btn btn-primary';
    formu.appendChild(btn);

    container.appendChild(titulo);
    container.appendChild(formu);
    
    return container;
}