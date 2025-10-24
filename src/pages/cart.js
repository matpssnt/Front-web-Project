import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js";


export default function renderCartPage(){
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const cart = document.createElement('div');
    cart.className = "tablestyle";
    cart.innerHTML = `
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Categoria</th>
              <th scope="col">Quantidade de Guests</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th>Luxo</th>
              <td>1 Criança, 2 Adultos</td>
              <td>9000000.99</td>
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
          </tbody>
          <tfoot>
            <th>Total:</th>
            <td></td>
            <td>valor</td>
          </tfoot>
        </table>

        <button type="submit" class="btn btn-primary text-end">Reservar</button>
    `;
    divRoot.appendChild(cart);

    const foot = document.getElementById('footer');
    foot.innerHTML = '';
        
    const footer = Footer();
    foot.appendChild(footer);
}