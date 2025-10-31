import { createRoom } from "../api/roomAPI.js";

export default function cadRoom() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '500px';
    container.style.margin = '40px auto';

    const formu = document.createElement('form');
    formu.className = "d-flex flex-column";
    formu.enctype = 'multipart/form-data';

    const titulo = document.createElement('h2');
    titulo.className = 'titulo';
    titulo.textContent = 'Registrar Novo Quarto';
    container.appendChild(titulo);

    function createFormField(labelText, inputType, placeholder, required = true) {
        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.fontFamily = '"Lato", sans-serif';
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '3px';
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

    createFormField('Nome do Quarto:', 'text', 'Ex: Suíte Luxo, Quarto Standard, etc.');
    createFormField('Número do Quarto:', 'number', 'Ex: 101, 202, etc.');
    createFormField('Quantidade de Camas de Casal:', 'number', 'Ex: 1, 2, etc.');
    createFormField('Quantidade de Camas de Solteiro:', 'number', 'Ex: 1, 2, etc.');
    createFormField('Preço por Diária (R$):', 'number', 'Ex: R$ 50.00');

    
    const labelDisponivel = document.createElement('p');
    labelDisponivel.textContent = 'Disponibilidade:';
    labelDisponivel.style.fontFamily = '"Lato", sans-serif';
    labelDisponivel.style.fontWeight = 'bold';
    labelDisponivel.style.marginBottom = '10px';
    formu.appendChild(labelDisponivel);

    const selectDisponivel = document.createElement('div');
    selectDisponivel.className = 'd-flex flex-row gap-3 align-items-center mb-3';
    formu.appendChild(selectDisponivel);

    // Radio (sim)
    const radioSimContainer = document.createElement('div');
    radioSimContainer.className = 'd-flex align-items-center gap-2';
    
    const inputDispTrue = document.createElement('input');
    inputDispTrue.type = 'radio';
    inputDispTrue.name = 'disponivel';
    inputDispTrue.value = 'true';
    inputDispTrue.id = 'disponivel-sim';
    inputDispTrue.style.cursor = "pointer";

    const labelTrue = document.createElement('label');
    labelTrue.textContent = 'Sim';
    labelTrue.htmlFor = 'disponivel-sim';
    labelTrue.style.cursor = 'pointer';
    labelTrue.style.marginBottom = '0';

    radioSimContainer.appendChild(inputDispTrue);
    radioSimContainer.appendChild(labelTrue);

    // Radio (não)
    const radioNaoContainer = document.createElement('div');
    radioNaoContainer.className = 'd-flex align-items-center gap-2';
    
    const inputDispFalse = document.createElement('input');
    inputDispFalse.type = 'radio';
    inputDispFalse.name = 'disponivel';
    inputDispFalse.value = 'false';
    inputDispFalse.id = 'disponivel-nao';
    inputDispFalse.style.cursor = "pointer";

    const labelFalse = document.createElement('label');
    labelFalse.textContent = 'Não';
    labelFalse.htmlFor = 'disponivel-nao';
    labelFalse.style.cursor = 'pointer';
    labelFalse.style.marginBottom = '0';

    radioNaoContainer.appendChild(inputDispFalse);
    radioNaoContainer.appendChild(labelFalse);

    selectDisponivel.appendChild(radioSimContainer);
    selectDisponivel.appendChild(radioNaoContainer);

    
    const radioStyle = document.createElement('style');
    radioStyle.textContent = `
        input[type="radio"] {
            accent-color: rgb(161, 101, 10);
            cursor: pointer;
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