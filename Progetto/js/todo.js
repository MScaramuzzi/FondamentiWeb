// Elementi della pagina che dovranno essere selezionati
const clear = document.querySelector(".clear");

/** Rende la data più leggeibile trasformando  
 * la prima lettera di giorno e mese in maiuscolo */


document.getElementById("date").style.textTransform = "capitalize";
let dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.querySelector(".task");

//  Nomi delle classi
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

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

//  Mostra data di oggi

const options = { weekday: "long", month: "long", day: "numeric" };


const today = new Date();


dateElement.innerHTML = today.toLocaleDateString("it-IT", options);





function addToDo(toDo, id, done, trash) {

    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// Aggiungi un elemento alla lista quando l'utente preme enter
// il codice 13 è quello di enter
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        const toDo = input.value;

        //se l'input non è vuoto
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });

            /* aggiungi item al localstorage (questo codice deve essere presente 
            in ogni punto del codice dove il vettore LIST è modificato) */

            localStorage.setItem("TODO", JSON.stringify(LIST)); //vedi JSON.stringify
            //spiega setItem


            id++;
        }
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
                done: false,
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