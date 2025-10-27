import { listAvailableRoomsRequest } from "../api/roomAPI.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import Modal from "../components/Modal.js";
import CardLounge from "../components/CardLounge.js";
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

    const dateToday = new Date().toISOString().split("T")[0];

    const [dateCheckIn, dateCheckOut] = dateSelect.querySelectorAll('input[type="date"]');
    dateCheckIn.min = dateToday;
    dateCheckOut.min = dateToday;


    const guestsAmount = dateSelect.querySelector('select');

    dateCheckIn.id = 'id-dateCheckIn';
    dateCheckOut.id = 'id-dateCheckOut';
    guestsAmount.id = 'id-guestAmount';

    const btnSearchRoom = dateSelect.querySelector('button');
    
    const modal = Modal();
    divRoot.appendChild(modal);

    const card = document.createElement('div');
    card.className = "cardContainer";
    card.id = "card-result";

    const cardGroup = document.createElement('div');
    cardGroup.className = 'cardContainer';

    const tituloGroup = document.createElement('h2');
    tituloGroup.textContent = "Conheça nosso hotel";
    tituloGroup.style.textAlign = "center";

    const showModal = (message) => {
        const modalBody = document.getElementById('modal-content');
        modalBody.textContent = message;
        
        const modalElement = document.getElementById('staticBackdrop');
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.show();
    };

    const loungeItems = [
            {path: "restaurante.jpg", title:
                "Restaurante", text: "Nosso restaurante"
                 + " têm as melhores especiárias de peixes!"},

            {path: "spa.jpg", title: "SPA",
                 text: "Nosso SPA é ideal para"
                 + " momentos de relaxamento felino!"},

            {path: "bar.jpg", title: "Bar",
                 text: "Nosso bar oferece"
                 + " drinks de peixe sem chumbinho, confia!"}
    ];
 

    for (let i = 0; i < loungeItems.length; i++) {
         const cardLounge = CardLounge(loungeItems[i], i);
         cardGroup.appendChild(cardLounge);
    }

    function getMinDateCheckout(dateCheckin) {
        const minDaily = new Date(dateCheckin);
        
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    dateCheckIn.addEventListener("change", async (e) => {
        if (dateCheckIn.value) {
            const minDateCheckout = getMinDateCheckout(dateCheckIn.value);
            dateCheckOut.min = minDateCheckout;
        
        //Se já houver uma data de check-out selecionada e for inválida
            if (dateCheckOut.value && dateCheckOut.value <= dateCheckIn.value) {
                dateCheckOut.value = "";
                alert("A data de check-out deve ser posterior ao check-in!");
                /* Estou utilizando alerta porque EU, PROFESSORA, não tenho
                um modal, vocês deveriam já ter e chamá-lo no lugar do alert() */ 
            }
        }
    });


    btnSearchRoom.addEventListener("click", async(e) => {
        e.preventDefault();

        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const capacidade = parseInt(guestsAmount?.value || "0", 10);


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
    divRoot.appendChild(tituloGroup);
    divRoot.appendChild(cardGroup);
}