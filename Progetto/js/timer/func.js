let pomodoro = true

// tempo di default per la sessione di studio
let initialTime = 25

//tempo di default per la pausa
let breakTime = 5

/* si definiscono le variabili necessarie tenere traccia dello scorrere del 
  tempo nel timer
*/
let intervals, pomTime, brkTime, sesMarker, brkMarker, pomMin, pomSec, brkMin, brkSec;
let au = false
let cssMarker = 100
let sessionMarker = 0;
let breakMarker = 0

let initTime = initialTime
let breaktimer = breakTime

/** Si implementano gli eventListener per il click dell'utente
 sui bottoni dell'interfaccia
 */

play.addEventListener('click', playTimer)
audio.addEventListener('click', playAudio)
pause.addEventListener('click', pauseTimer)
stop.addEventListener('click', stopTimer)

// riproduce quando playTimer è cliccato
function playTimer() {

    // aggiunge e rimuove dalla classlist
    this.classList.add('clicked')
    pause.classList.remove('clicked')
    stop.classList.remove('clicked')

    //rimuove gli eventListeners quando inizia la sessione di studio
    removeWhenStart()

    // inizializzia il timer della pomodoro session, trasforma i minuti in secondi
    pomTime = initTime * 60
    if (brkTime) {
        brkTime = breaktimer
    }

    // breaktimer
    brkTime = breaktimer * 60
    sesMarker = parseFloat((cssMarker / (initialTime * 60)).toFixed(2))
    brkMarker = parseFloat((cssMarker / (breakTime * 60)).toFixed(2))

    // richiama intervals ogni secondo
    intervals = setInterval(() => {
        if (au) tik.play()

        if (!pomodoro) {
            title.innerHTML = 'break period'
            regBreakTime()
        } else {
            title.innerHTML = 'training session'
            regTime()
        }
    }, 1000)

    // aggiunge una classe per l'animazione
    timer.classList.add('begin')

    play.removeEventListener('click', playTimer)
    pause.addEventListener('click', pauseTimer)
}

// countodwn pomodoro timer
function regTime() {

    // converte pomTime in minuti
    let min = Math.floor(pomTime / 60)

    // converte pomTime in secondi
    let sec = pomTime - min * 60

    // decrementa pomTime
    pomTime--

    // setta il timer per il display
    pomMin = min < 10 ? '0' + min : min
    pomSec = sec < 10 ? '0' + sec : sec
    timer.innerHTML = pomMin + ':' + pomSec

    //colora il timer

    marker.style.background = `conic-gradient(#ff5722 ${sessionMarker}% , teal ${sessionMarker}% 100%)`

    // controlla se la sessione è finita
    if (pomTime < 0) {
        pomodoro = false
        brkTime = breakTime * 60
        sessionMarker = 0
        breakMarker = 0
    }

    // riproduce l'audio
    if (au)
        if (pomTime == 4) finish.play()
    sessionMarker += sesMarker
}

// countdown del timer per la pausa
function regBreakTime() {

    // converte il breaktime in minuti
    let min = Math.floor(brkTime / 60)
    let sec = brkTime - min * 60

    // decrementa il breaktime
    brkTime--

    // mostra il timer in HTML
    brkMin = min < 10 ? '0' + min : min
    brkSec = sec < 10 ? '0' + sec : sec
    timer.innerHTML = brkMin + ':' + brkSec
    marker.style.background = `conic-gradient(orange ${breakMarker}% , peru ${breakMarker}% 100%)`

    // controlla che il breaktime non sia finito
    if (brkTime < 0) {
        pomodoro = true
        breakMarker = 0
        sessionMarker = 0
        pomTime = initialTime * 60
    }

    // riproduce l'audio
    if (au) {
        if (brkTime == 3) go.play()
    }
    breakMarker += brkMarker
}

// ferma il timer
function pauseTimer() {
    // svuota gli intervalli
    clearInterval(intervals)

    // aggiungi css
    this.classList.add('clicked')
    play.classList.remove('clicked')
    stop.classList.remove('clicked')


    // Assegna il timer al tempo rimanente
    initTime = pomTime / 60
    breaktimer = brkTime / 60

    // Aggiunge l'event listener "play"
    play.addEventListener('click', playTimer)


}

//  ferma/resetta il timer
function stopTimer() {

    // remove the css
    this.classList.add('clicked')
    play.classList.remove('clicked')
    pause.classList.remove('clicked')

    // Si aggiunge l'event listener ai bottoni
    addClickable()

    //svuota tutti gli intervalli
    clearInterval(intervals)
    initTime = initialTime
    play.addEventListener('click', playTimer)
    pause.removeEventListener('click', pauseTimer)
    timer.classList.remove('begin')

    breakMarker = 0
    sessionMarker = 0

    pomodoro = true

    marker.style.background = '#f7e4c8'

    if (initialTime < 10) {
        title.innerHTML = 'training session'
        timer.innerHTML = `0${initialTime}:00`
    } else {
        timer.innerHTML = `${initialTime}:00`
    }
}

// muta l'audio
function playAudio() {
    au = !au
    if (au) {
        audio.innerHTML = `<i class="fa fa-volume-up fa-2x"></i>`
    } else {
        audio.innerHTML = `<i class="fa fa-volume-off fa-2x"></i>`

    }
}