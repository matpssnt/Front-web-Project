import { listAvailableRoomsRequest } from "../api/roomAPI.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import Modal from "../components/Modal.js";
import CarouselCard from "../components/CarouselCard.js";

export default function renderHomePage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';
        
    const footer = Footer();
    pezin.appendChild(footer);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    
    const containerHero = Hero();
    divRoot.appendChild(containerHero);

    const dateSelect = DateSelector();
    divRoot.appendChild(dateSelect);


    const [dateInput, dateOutput] = dateSelect.querySelectorAll('input[type="date"]');
    const guestsAmount = dateSelect.querySelector('select');
    const btnSearchRoom = dateSelect.querySelector('button');
    
    const modal = Modal();
    divRoot.appendChild(modal);

    const card = document.createElement('div');
    card.className = "cardContainer";
    card.id = "card-result";

    const showModal = (message) => {
        const modalBody = document.getElementById('modal-content');
        modalBody.textContent = message;
        
        const modalElement = document.getElementById('staticBackdrop');
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.show();
    };


    btnSearchRoom.addEventListener("click", async(e) => {
        e.preventDefault();

        const inicio = (dateInput?.value || "").trim();
        const fim = (dateOutput?.value || "").trim();
        const capacidade = parseInt(guestsAmount?.value || "0", 10);

        //Validação do preenchimento de infos
        if (!inicio || !fim || Number.isNaN(capacidade) || (capacidade) <= 0) {
             showModal("Preencha todos os campos!");
            return;
        }

        const dateStart = new Date(inicio);
        const dateEnd = new Date(fim);


        if (isNaN(dateStart) || isNaN(dateEnd) || dateStart >= dateEnd) {
            showModal("A data de checkout deve ser posterior ao checkin!");
            return;
        }

        console.log("Buscando quartos disponíveis...");
        /* Aqui vai ser o Spinner */

        try {
            const result = await listAvailableRoomsRequest({inicio, fim, capacidade});

            if (!result.length) {
                showModal("Nenhum quarto disponível para esse período!");
                return;
            }
            
            card.innerHTML = '';
            result.forEach((itemCard, i) => {
                card.appendChild(RoomCard(itemCard, i));
            });

        }
        catch(error) {
            console.log(error);
        }
        
    });

    divRoot.appendChild(card);
}