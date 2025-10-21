export default function RegisterRoom() {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '500px';
    container.style.margin = '40px auto';

    const formu = document.createElement('form');
    formu.className = 'd-flex flex-column';

    const titulo = document.createElement('h2');
    titulo.className = 'titulo';
    titulo.textContent = 'Registrar Novo Quarto';


    function createFormField(labelText, inputType, placeholder, required = true) {
        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontFamily = '"Lato", sans-serif';
        label.style.fontWeight = '400';
        label.style.marginBottom = '3px';
        //label.style.marginTop = '15px';
        formu.appendChild(label);

        const input = document.createElement('input');
        input.type = inputType;
        input.placeholder = placeholder;
        input.required = required;
        input.className = 'input';
        input.style.padding = '5px';
        input.style.fontFamily = '"Lato", sans-serif';
        input.style.fontSize = '16px';
        formu.appendChild(input);

        return input;
    }

    // Criando os campos do formulário
    createFormField('Nome do Quarto:', 'text', 'Ex: Suíte Luxo, Quarto Standard, etc.');
    
    createFormField('Número do Quarto:', 'number', 'Ex: 101, 202, etc.');
    
    createFormField('Quantidade de Camas de Casal:', 'number', 'Ex: 1, 2, etc.');
    
    createFormField('Quantidade de Camas de Solteiro:', 'number', 'Ex: 1, 2, etc.');
    
    createFormField('Preço por Diária (R$):', 'number', 'Ex: R$ 50.00');

    // Campo de disponibilidade (select)
    const labelDisponivel = document.createElement('label');
    labelDisponivel.textContent = 'Disponibilidade:';
    labelDisponivel.style.fontFamily = '"Lato", sans-serif';
    labelDisponivel.style.fontWeight = '400';
    labelDisponivel.style.marginBottom = '5px';
    labelDisponivel.style.marginTop = '15px';
    formu.appendChild(labelDisponivel);

    const selectDisponivel = document.createElement('select');
    selectDisponivel.name = 'disponível';
    selectDisponivel.required = true;
    selectDisponivel.className = 'input'; // Aplicando a classe input
    selectDisponivel.style.padding = '10px';
    selectDisponivel.style.fontFamily = '"Lato", sans-serif';
    selectDisponivel.style.fontSize = '16px';
    selectDisponivel.style.backgroundColor = 'white';
    formu.appendChild(selectDisponivel);

    const optionSim = document.createElement('option');
    optionSim.value = 1;
    optionSim.textContent = 'Sim';
    selectDisponivel.appendChild(optionSim);

    const optionNao = document.createElement('option');
    optionNao.value = 0;
    optionNao.textContent = 'Não';
    selectDisponivel.appendChild(optionNao);

    // Campo de imagem
    const labelImage = document.createElement('label');
    labelImage.textContent = 'Imagem do Quarto:';
    labelImage.style.fontFamily = '"Lato", sans-serif';
    labelImage.style.fontWeight = '400';
    labelImage.style.marginBottom = '5px';
    labelImage.style.marginTop = '15px';
    formu.appendChild(labelImage);

    const inputImageContainer = document.createElement('div');
    inputImageContainer.innerHTML = `
    <div class="mb-3">
      <label for="formFileMultiple" class="form-label" style="font-family: 'Lato', sans-serif; font-weight: 400;">Escolher imagens (opcional)</label>
      <input class="form-control input" type="file" id="formFileMultiple" name="imagem" accept="image/*" multiple style="padding: 8px; font-family: 'Lato', sans-serif;">
    </div>
    `;
    formu.appendChild(inputImageContainer);

    const previewImages = document.createElement('div');
    previewImages.className = "mb-3";
    inputImageContainer.appendChild(previewImages);

    const previewGrid = document.createElement('div');
    previewGrid.id = "preview-images-grid";
    previewGrid.style.display = "flex";
    previewGrid.style.flexWrap = "wrap";
    previewGrid.style.gap = "10px";
    previewGrid.style.justifyContent = "center";
    previewGrid.style.marginTop = "10px";
    previewImages.appendChild(previewGrid);

    const previewLabel = document.createElement('p');
    previewLabel.id = "preview-images-label";
    previewLabel.textContent = "Nenhuma imagem selecionada!";
    previewLabel.style.fontFamily = '"Lato", sans-serif';
    previewLabel.style.fontSize = '14px';
    previewLabel.style.color = '#666';
    previewLabel.style.textAlign = 'center';
    previewLabel.style.marginTop = '10px';
    previewImages.appendChild(previewLabel);

    const formFileInput = inputImageContainer.querySelector('#formFileMultiple');
    if (formFileInput) {
        formFileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files || []);
            const previewGridImg = document.getElementById('preview-images-grid');
            const previewLabelImg = document.getElementById('preview-images-label');

            previewGridImg.innerHTML = '';

            if (files.length > 0) {
                previewLabelImg.style.display = 'none';
                files.forEach((file) => {
                    if (!file.type.startsWith('image/')) return;
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const img = document.createElement('img');
                        img.src = ev.target.result;
                        img.style.maxWidth = '100px';
                        img.style.maxHeight = '100px';
                        img.style.objectFit = 'cover';
                        img.style.border = '1px solid #ddd';
                        img.style.borderRadius = '6px';
                        img.style.padding = '2px';
                        previewGridImg.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                });
            }
            else {
                previewLabelImg.style.display = 'block';
                previewLabelImg.textContent = 'Nenhuma imagem foi selecionada!';
            }
        });
    }

    const divButtons = document.createElement('div');
    divButtons.className = 'd-flex gap-2 justify-content-center';
    divButtons.style.marginTop = '25px';
    formu.appendChild(divButtons);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Registrar';
    submitButton.className = 'btn btn-primary';
    submitButton.style.flex = '1';
    submitButton.style.padding = '12px';
    divButtons.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancelar';
    cancelButton.className = 'btn btn-secondary';
    cancelButton.style.flex = '1';
    cancelButton.style.padding = '12px';
    divButtons.appendChild(cancelButton);

    container.appendChild(titulo);
    container.appendChild(formu);

    formu.addEventListener('submit', async (e) => {
        e.preventDefault();
        await cadRoom(formu);
    });

    cancelButton.addEventListener('click', () => {
        window.history.back();
    });

    return container;
}

export async function cadRoom(formu) {
    const formData = new FormData(formu);
    const dataRoom = {
        nome: formData.get('nome'),
        numero: formData.get('numero'),
        qtd_cama_casal: formData.get('qtd_cama_casal'),
        qtd_cama_solteiro: formData.get('qtd_cama_solteiro'),
        preco: formData.get('preco'),
        disponivel: formData.get('disponível')
    };

    const imageFiles = formData.getAll('imagem');
    
    try {
        if (imageFiles && imageFiles.length > 0 && imageFiles[0].size > 0) {
            const formDataToSend = new FormData();
            formDataToSend.append('nome', dataRoom.nome);
            formDataToSend.append('numero', dataRoom.numero);
            formDataToSend.append('qtd_cama_casal', dataRoom.qtd_cama_casal);
            formDataToSend.append('qtd_cama_solteiro', dataRoom.qtd_cama_solteiro);
            formDataToSend.append('preco', dataRoom.preco);
            formDataToSend.append('disponivel', dataRoom.disponivel);
            
            // Adiciona todas as imagens
            imageFiles.forEach(file => {
                if (file.size > 0) {
                    formDataToSend.append('imagem', file);
                }
            });

            const response = await fetch('api/quartos', {
                method: 'POST',
                headers: {
                    "Accept": "application/json"
                },
                credentials: 'same-origin',
                body: formDataToSend
            });

            const data = await response.json();

            if (response.ok) {
                alert('Quarto cadastrado com sucesso!');
                formu.reset();

                const previewGridImg = document.getElementById('preview-images-grid');
                const previewLabelImg = document.getElementById('preview-images-label');

                if (previewGridImg) previewGridImg.innerHTML = '';
                if (previewLabelImg) previewLabelImg.style.display = 'block';
                
                window.location.reload();
            }
            else {
                alert(`Erro ao cadastrar o quarto: ${data.message || 'Erro desconhecido'}`);
            }
        }
        else {
            const response = await fetch('api/quartos', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'same-origin',
                body: JSON.stringify(dataRoom)
            });

            const data = await response.json();
            if (response.ok) {
                alert('Quarto cadastrado com sucesso!');
                formu.reset();

                const previewGridImg = document.getElementById('preview-images-grid');
                const previewLabelImg = document.getElementById('preview-images-label');
                if (previewGridImg) previewGridImg.innerHTML = '';
                if (previewLabelImg) previewLabelImg.style.display = 'block';

                window.location.reload();
            }
            else {
                alert(`Erro ao cadastrar o quarto: ${data.message || 'Erro desconhecido'}`);
            }
        }
    }
    catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro na conexão. Por favor, tente novamente.');
    }
}