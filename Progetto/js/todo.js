// Elementi della pagina che dovranno essere selezionati
const clear = document.querySelector(".clear");

/** Rende la data più leggeibile trasformando  
   la prima lettera del giorno e del mese corrente in maiuscolo */


document.getElementById("date").style.textTransform = "capitalize";
let dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.querySelector(".task");

//  Nomi delle classi
const CHECK = "fa-check-circle"; //check effettuato (attività completata)
const UNCHECK = "fa-circle-thin"; //check non effettuato (attività da completare)
const LINE_THROUGH = "lineThrough"; //linea per sbarrare attività completata

// Variabili
let LIST, id;

// ottieni l'item dal local storage
//spiega getItem
let data = localStorage.getItem("TODO");

// controlla che data non sia vuoto
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // setta l'id dell'elemento come ultimo della list
    loadList(LIST); // carica la lista nell'interfaccia dell'user
} else {
    // se data è vuoto
    LIST = [];
    id = 0;
}

// carica la lista nell'interfaccia dell'user
// #######spiega logica dei parametri done,job,trash,id etc. ##################
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

//ripulisci local storage
//spiega clear e reload,location
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Mostra data di oggi
const options = { weekday: "short", month: "long", day: "numeric" };
const today = new Date();


dateElement.innerHTML = today.toLocaleDateString("it-IT", options);


//aggiungi attività alla lista
function addToDo(toDo, id, done, trash) {

    if (trash) { return; }


    const DONE = done ? CHECK : UNCHECK; //se l'attività è completata si aggiunge la spunta
    const LINE = done ? LINE_THROUGH : ""; //se l'attività è completata viene sbarrata

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    //costante dove è definita la posizione in cui vanno aggiunte le attività alla lista
    const position = "beforeend";

    /*si occupa di aggiungere le varie attività una sotto l'altra partendo dall'avere
    in cima l'attività meno recentemente aggiunta e le attività più recenti a seguire*/
    list.insertAdjacentHTML(position, item);
}

// Aggiungi un elemento alla lista quando l'utente preme enter
// il codice 13 è specifico proprio del tasto enter 
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        const toDo = input.value;

        //se l'input non è vuoto
        if (toDo) {
            //in caso affermativo aggiunge l'attività alla lista
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });

            /* aggiungi item al localstorage (questo codice deve essere presente 
            in ogni punto del codice dove il vettore LIST è modificato) */

            localStorage.setItem("TODO", JSON.stringify(LIST));
            /*il metodo localStorage.setItem() quando passa il nome di una chiave e un valore, aggiunge questa chiave allo storage, 
            oppure se la chiave esiste già aggiorna il valore della chiave stessa.*/
            /*il metodo JSON.stringify converte un oggetto o un valore JavaScript in una stringa JSON, sostituendo facoltativamente i 
            valori se viene specificata una funzione sostitutiva o facoltativamente includendo solo le 
            proprietà specificate se viene specificato un array replacer.*/

            id++;
        }
        //di conseguenza viene "pulito" l'input
        input.value = "";
    }
});

// Aggiungi un elemento alla lista quando l'utente preme sul buttone del "più"

add.addEventListener("click", function(event) {
    if (event) {
        const toDo = input.value;

        // se l'input non è vuoto
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false, //attività non completata
                trash: false
            });

            /* aggiungi item al localstorage (questo codice deve essere presente 
            in ogni punto del codice dove il vettore LIST è modificato) */
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        // resetta l'input
        input.value = "";
    }
});


// completa il to do item
//spiega classlist e toggle
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// rimuovi to do item
// spiega parentnode
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// seleziona  gli item creati dinamicamente sia eliminandoli sia completandoli
//spiega elementJob
list.addEventListener("click", function(event) {
    const element = event.target; // ritorna l'elemento clickato all'interno della lista 
    const elementJob = element.attributes.job.value; // completa o elimina

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }

    /* aggiungi item al localstorage (questo codice deve essere presente 
    in ogni punto del codice dove il vettore LIST è modificato) */
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
