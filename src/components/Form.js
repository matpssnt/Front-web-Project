export default function Form(showTypeSelector = true) {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.alignItems = "center";
    divRoot.style.height = "100vh";
    
    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '575px';
    divRoot.appendChild(container);


    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça seu login';
    titulo.className = 'titulo';

    let userTypeSelector = null;
    if (showTypeSelector) {
        userTypeSelector = document.createElement('div');
        userTypeSelector.className = 'user-type-selector mb-4';
        userTypeSelector.innerHTML = `
            <div class="btn-group w-100" role="group">
                <input type="radio" class="btn-check" name="userType" id="clientType" autocomplete="off" checked>
                <label class="btn btn-outline-primary" for="clientType">Hóspede/Cliente</label>
                
                <input type="radio" class="btn-check" name="userType" id="employeeType" autocomplete="off">
                <label class="btn btn-outline-primary" for="employeeType">Funcionário</label>
            </div>
        `;
        container.appendChild(userTypeSelector);
    }

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
    
    container.userTypeSelector = userTypeSelector;
    container.formElement = formu;

    return container;
}