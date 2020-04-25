//ottengo le variabili dalla DOM
const title = document.querySelector('.sessionName')
const timer = document.querySelector('.timer')
const brkTimer = document.querySelector('.break')

// variabili per regolare i minuti al timer
const minusMin = document.querySelector('.minus')
const addMin = document.querySelector('.add')

// variabili per il controllo del timer
const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const pause = document.querySelector('.pause')

// variabili per regolare la pausa
const minusBrk = document.querySelector('.minusBrk')
const addBrk = document.querySelector('.addBrk')


// seleziono il div in cui ci sono i tre bottoni per il controllo del timer
const addButton = document.querySelector('.btnAdd')

// bottone per mutare l'audio del timer
const audio = document.querySelector('.audio')

// variabili per far sentire all'utente il ticchettio del timer
const tik = document.querySelector('audio[data-key="tik"]');
const go = document.querySelector('audio[data-key="go"]');
const finish = document.querySelector('audio[data-key="finish"]');

//seleziono il div interno che contiene il timer
const marker = document.querySelector('.inner')