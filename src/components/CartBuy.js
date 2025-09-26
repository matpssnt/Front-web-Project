export default function barraCategoria() {
    // Div Grandona

    const divPrincipal = document.createElement('div');
    divPrincipal.className = 'divPrincipal';
    divPrincipal.style.backgroundColor = '#3c5ec2ff'; 
    divPrincipal.style.padding = '20px 30px';
    divPrincipal.style.display = 'flex';
    divPrincipal.style.marginLeft = '100px';
    divPrincipal.style.marginTop = '10px';
    divPrincipal.style.justifyContent = 'space-between';
    divPrincipal.style.alignItems = 'center';
    divPrincipal.style.width = '65%';
    divPrincipal.style.borderRadius = '20px';
    divPrincipal.style.fontFamily = 'Arial, sans-serif';
    divPrincipal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';

    const categoria = document.createElement('h2');
    categoria.textContent = 'Categoria de quarto';
    categoria.style.fontSize = '22px';
    categoria.style.color = 'white';
    categoria.style.margin = '0';
    divPrincipal.appendChild(categoria);

    const qtdPessoas = document.createElement('h2');
    qtdPessoas.textContent = 'Quantas Pessoas?';
    qtdPessoas.style.fontSize = '18px';
    qtdPessoas.style.color = 'white';
    qtdPessoas.style.margin = '0';
    divPrincipal.appendChild(qtdPessoas);

    const preco = document.createElement('div');
    preco.style.backgroundColor = '#202020ff'; 
    preco.style.padding = '12px 20px';
    preco.style.borderRadius = '10px';
    preco.style.color = 'white';
    preco.style.fontWeight = 'bold';
    preco.style.boxShadow = '0 3px 6px rgba(0,0,0,0.15)';

    const precoQtd = document.createElement('h2');
    precoQtd.textContent = 'Preço por diárias';
    precoQtd.style.margin = '0';
    precoQtd.style.fontSize = '18px';
    preco.appendChild(precoQtd);
    divPrincipal.appendChild(preco);

    return divPrincipal;
}