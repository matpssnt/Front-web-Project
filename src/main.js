import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";
import renderHomePage from "./pages/homePage.js";
import renderCartPage from "./pages/cart.js";
import renderRegRoomPage from "./pages/registerRoom.js";

// Configuração de rotas
const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
    "/home": renderHomePage,
    "/cart" : renderCartPage,
    "/room": renderRegRoomPage
    //Novas páginas virão aqui, conforme forem sendo desenvolvidas.
};


//Obtém o caminho atual a partir do nome.
function getPath() {

    //Exemplo: obtém o "/login".
    const url = (location.pathname || "").replace("/Possonato/", "/").trim();
    
    //Retorna a URL se começar com "/", se não irá retornar "/home" como padrão.
    return url && url.startsWith("/") ? url : "/home";
}


//Decide o que renderizar com base na rota atual.
function renderRoutes() {
    const url = getPath(); //Lê a rota atual, ex. "/register".
    const render = routes[url] || routes["/home"]; //Busca esta rota no mapa.
    render(); //Executa a função de render na página atual.
}

//Renderização
document.addEventListener('DOMContentLoaded', renderRoutes);