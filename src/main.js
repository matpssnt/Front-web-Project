import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";
import renderHomePage from "./pages/homePage.js";

// Configuração de rotas
const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
    "/home": renderHomePage
    //Novas páginas virão aqui, conforme forem sendo desenvolvidas.
};


//Obtém o caminho atual a partir do hash da URL.
function getPath() {

    //Obtém o hash (ex. "#/login"), remove o # e tira espaços.
    const url = (location.hash || "").replace(/^#/, "").trim();
    
    //Retorna a URL se começar com "/", se não irá retornar "/home" como padrão.
    return url && url.startsWith("/") ? url : "/home";
}


//Decide o que renderizar com base na rota atual.
function renderRoutes() {
    const url = getPath(); //Lê a rota atual, ex. "/register".
    const render = routes[url] || routes["/home"]; //Busca esta rota no mapa.
    render(); //Executa a função de render na página atual.
}



window.addEventListener("hashchange", renderRoutes);

//Renderização
document.addEventListener('DOMContentLoaded', renderRoutes);