import { createRoom } from "../api/roomAPI.js";

export default function cadRoom() {

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '500px';
    container.style.margin = '40px auto';

    const formu = document.createElement('form');
    formu.className = "d-flex flex-column";
    formu.enctype = 'multipart/form-data';

    const titulo = document.createElement('h2');
    titulo.className = 'titulo text-center mb-4';
    titulo.textContent = 'Registrar Novo Quarto';
    container.appendChild(titulo);

    function createFormField(labelText, inputType, placeholder, name, required = true) {
        const formGroup = document.createElement('div'); 
        formGroup.className = 'mb-3';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.className = 'form-label';
        label.style.fontFamily = '"Lato", sans-serif';
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '3px';
        formGroup.appendChild(label);

        const input = document.createElement('input');
        input.type = inputType;
        input.placeholder = placeholder;
        input.required = required;
        input.name = name;
        input.className = 'form-control';
        input.style.padding = '5px';
        input.style.fontFamily = '"Lato", sans-serif';
        input.style.fontSize = '16px';
        formGroup.appendChild(input);

        formu.appendChild(formGroup);

        return input;
    }

    createFormField('Nome do Quarto:', 'text', 'Ex: Suíte Luxo, Quarto Standard, etc.', "nome");
    createFormField('Número do Quarto:', 'number', 'Ex: 101, 202, etc.', "numero");
    createFormField('Quantidade de Camas de Casal:', 'number', 'Ex: 1, 2, etc.', "qnt_cama_solteiro");
    createFormField('Quantidade de Camas de Solteiro:', 'number', 'Ex: 1, 2, etc.', "qnt_cama_casal");
    createFormField('Preço por Diária (R$):', 'number', 'Ex: R$ 50.00', "preco");


    const radioGroup = document.createElement('div');
    radioGroup.className = 'mb-3';
    
    const labelDisponivel = document.createElement('p');
    labelDisponivel.textContent = 'Disponibilidade:';
    labelDisponivel.style.fontFamily = '"Lato", sans-serif';
    labelDisponivel.style.fontWeight = 'bold';
    labelDisponivel.style.marginBottom = '5px';
    radioGroup.appendChild(labelDisponivel);

    const selectDisponivel = document.createElement('div');
    selectDisponivel.className = 'd-flex flex-row gap-3 align-items-center';
    radioGroup.appendChild(selectDisponivel);

    // Função radio button
    function createRadio(value, labelText, checked = false) {
        const container = document.createElement('div');
        container.className = 'form-check';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'disponivel';
        input.value = value;
        input.id = `disponivel-${value}`;
        input.checked = checked;
        input.className = 'form-check-input';
        input.style.cursor = 'pointer';

        const label = document.createElement('label');
        label.textContent = labelText;
        label.htmlFor = `disponivel-${value}`;
        label.className = 'form-check-label';

        container.appendChild(input);
        container.appendChild(label);
        return container;
    }

    selectDisponivel.appendChild(createRadio("1", 'Sim', true)); // O 'Sim' é o padrão
    selectDisponivel.appendChild(createRadio("0", 'Não'));

    formu.appendChild(radioGroup);

    
    const radioStyle = document.createElement('style');
    radioStyle.textContent = `
        .form-check-input:checked {
            background-color: rgb(161, 101, 10);
            border-color: rgb(161, 101, 10);
        }
    `;
    document.head.appendChild(radioStyle);

    
    const labelImage = document.createElement('label');
    labelImage.textContent = 'Imagem do Quarto:';
    labelImage.style.fontFamily = '"Lato", sans-serif';
    labelImage.style.fontWeight = 'bold';
    labelImage.style.marginBottom = '5px';
    labelImage.style.marginTop = '15px';
    formu.appendChild(labelImage);

    const inputImageContainer = document.createElement('div');
    inputImageContainer.innerHTML = `
        <div class="mb-3">
            <label for="formFileMultiple" class="form-label" style="font-family: 'Lato', sans-serif; font-weight: 400; font-style: italic;">Escolher imagens (opcional)</label>
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
    previewLabel.style.color = '#ff0000ff';
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
                        img.style.border = '1px solid rgb(161, 101, 10)';
                        img.style.borderRadius = '6px';
                        img.style.padding = '2px';
                        previewGridImg.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                });
            } else {
                previewLabelImg.style.display = 'block';
                previewLabelImg.textContent = 'Nenhuma imagem foi selecionada!';
            }
        });
    }

    // Botões
    const divButtons = document.createElement('div');
    divButtons.className = 'd-flex gap-2 justify-content-center mt-4';
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

    container.appendChild(formu);

    container.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Cadastrando...';

            const response = await createRoom(formu);
            console.log("Resposta do servidor: ", response);
        }
        catch (error) {
            console.log("Erro ao enviar requisição: " + error.message);
        }
        finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Registrar';
        }
    
    });

    cancelButton.addEventListener('click', () => {
        window.history.back();
    });

    return container;
}