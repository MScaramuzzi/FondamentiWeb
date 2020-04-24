//si ottengono le variabili dalla DOM

const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn");


/**  dichiara le due funzioni che permettono al form di registrazione
 di slittare a destra e a sinistra in base al fatto se si clicca sul bottone
 login o register
*/
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}