import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js";
import { getCart, getTotalItems, clearHotel_Cart } from "../store/cartStore.js";
import { finishedOrder } from "../api/orderAPI.js";
import Modal from "../components/Modal.js";

export default function renderCartPage(){
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const reservations = getCart();
    const total = getTotalItems();

    const container = document.createElement('div');
    container.className = "container my-4";

    const header = document.createElement('div');
    header.className = "d-flex align-items-center justify-content-between mb-3";

    header.innerHTML = 
    `
      <h3 class-"mb-0">Reservas</h3>
      <div>
          <button id="btnClear" class="btn btn-outline-danger btn-sm">Limpar carrinho</button>
      </div>
    `;
    // const { total, qnt_items } = getTotalItems();

    const cart = document.createElement('div');
    if (reservations.length === 0) {
      cart.innerHTML = 
      `
      <div class="alert alert-info">Seu carrinho está vazio!</div>
      `;
    }
    else {
    cart.innerHTML = `
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">

          <!-- Colunas da tabela -->
          <thead class="table-sucess">
            <tr>
              <th scope="col">Nome do quarto</th>
              <th scope="col">Data de check-in</th>
              <th scope="col">Data de check-out</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>

          <!-- Colunas da tabela -->
          <tbody class="table-group-divider">
            ${reservations.map(item => 
              `
              <tr>
                <td>${item.nome}</td>
                <td>${item.checkIn}</td>
                <td>${item.checkOut}</td>
                <td>R$ ${item.subtotal}</td>
              </tr>
              <tr>
                <th>Normal</th>
                <td>2 Crianças, 2 Adultos</td>
                <td>150.79</td>
              </tr>
              <tr>
                <th>Pobre</th>
                <td>20 Criança, 1 Adulto</td>
                <td>50.00</td>
              </tr>
              `
            ).join("")}
          </tbody>

          <tfoot>
            <th></th>
            <th>
              <h3 style="font-size: 19px;">R$ Total: ${total}</h3>
            </th>
            <th>
              <button id="btnSelectPage" type="submit" class="btn btn-outline-sucess btn-sm" 
              data-bs-toggle="modal" data-bs-target="#ctaModal">Finalizar compra</button>
            </th>
          </tfoot>

        </table>

        <button type="submit" class="btn btn-primary text-end">Reservar</button>
        
      </div>
    `;
    }

    container.appendChild(header);
    container.appendChild(cart);
    divRoot.appendChild(container);

     const btnClear = document.getElementById('btnClear');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        clearHotel_Cart();
        renderCartPage();
      });
    }

    const btnSelectPage = document.getElementById('btnSelectPage');
    btnSelectPage.addEventListener('click', () => {
      const existingModal = document.querySelector('.modal.fade');
        if (existingModal) {
          existingModal.remove();
        }

        const modalElement = Modal();
        document.body.appendChild(modalElement);

        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    });

    const btnFinish = document.getElementById('btnFinish');
    if (btnFinish) {
      btnFinish.addEventListener('click', async () => {
        const methodPayment = 'pix';

        try {
          const result = await finishedOrder(methodPayment, reservations);

          if (result.ok) {
            //Modal no lugar
            alert("Compra efetuada com sucesso!");
            clearHotel_Cart();
            renderCartPage();
          }
          else {
            alert(result.message || "Erro ao realizar a reserva!");
          }

        }
        catch (error) {
          alert(error?.message || "Falha na comunicação com o servidor!");
        }

      });
    }

    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';
        
    const footer = Footer();
    pezin.appendChild(footer);
}