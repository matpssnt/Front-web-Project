export default function DateSelector() {

    const dateDiv = document.createElement('div');
    dateDiv.style.display = 'flex';
    dateDiv.style.zIndex = '1000';
    dateDiv.style.gap = '12px';
    dateDiv.className = 'dateSelector';
    
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.className = 'card p-4 shadow-lg inputDate';
    dateInput.style.width = '300px';
    dateInput.style.height = '70px';
    dateInput.style.maxWidth = '300px';
    dateInput.style.maxHeight = '70px';
    dateDiv.appendChild(dateInput);
    
    const dateOutput = document.createElement('input');
    dateOutput.type = 'date';
    dateOutput.className = 'card p-4 shadow-lg inputDate';
    dateOutput.style.width = '300px';
    dateOutput.style.height = '70px';
    dateOutput.style.maxWidth = '300px';
    dateOutput.style.maxHeight = '70px';
    dateDiv.appendChild(dateOutput);

    const guestsAmount = document.createElement('select');
    guestsAmount.innerHTML = `
        <option value="">Quantidade de Hospedes</option>
        <option value="1">1 pessoa</option>
        <option value="2">2 pessoas</option>
        <option value="3">3 pessoas</option>
        <option value="4">4 pessoas</option>
        <option value="5">5 ou mais pessoas</option>`;
    guestsAmount.className = 'card p-4 shadow-lg';
    guestsAmount.style.width = '300px';
    guestsAmount.style.height = '70px';
    guestsAmount.style.maxWidth = '300px';
    guestsAmount.style.maxHeight = '70px';
    dateDiv.appendChild(guestsAmount);

    
    const btnDateReserv = document.createElement('button');
    btnDateReserv.type = 'submit';
    btnDateReserv.textContent = "Pesquisar";
    btnDateReserv.className = 'btn btn-primary';
    btnDateReserv.style.fontWeight = '16px';
    btnDateReserv.style.height = '69px';
    btnDateReserv.style.width = '100px';
    dateDiv.appendChild(btnDateReserv)

    return dateDiv;
}