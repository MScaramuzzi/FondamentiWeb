/** aggiungiamo gli eventListener per il click dell'utente
 sui bottoni dell'interfaccia*/
minusMin.addEventListener('click', lessMin)
addMin.addEventListener('click', moreMin)
minusBrk.addEventListener('click', lessBrk)
addBrk.addEventListener('click', moreBrk)





// riduci il valore della sessione di studio quando è cliccato il bottone meno
function lessMin() {
    if (initialTime == 1) return
    initialTime--
    initTime = initialTime
    timer.innerHTML = `${initialTime < 10 ? '0'+initialTime : initialTime}:00`
}

// aumenta il valore della sessione di studio quando è cliccato il bottone più
function moreMin() {
    if (initialTime == 90) return
    initialTime++
    initTime = initialTime
    timer.innerHTML = `${initialTime < 10 ? '0'+initialTime : initialTime}:00`
}

// riduci il valore della pausa quando è cliccato il bottone meno
function lessBrk() {
    if (breakTime == 1) return
    breakTime--
    breaktimer = breakTime
    brkTimer.innerText = `${breakTime} min`
}

// aumenta il valore della pausa quando è cliccato il bottone più
function moreBrk() {
    if (breakTime == 15) return
    breakTime++
    breaktimer = breakTime
    brkTimer.innerText = `${breakTime} min`
}

// rimuovi gli event listeners dei bottoni minuti quando è iniziata la sessione
function removeWhenStart() {
    minusMin.removeEventListener('click', lessMin)
    addMin.removeEventListener('click', moreMin)
    minusBrk.removeEventListener('click', lessBrk)
    addBrk.removeEventListener('click', moreBrk)
}

// ****RIVEDI*** aggiungi gli event listener quando è iniziata la sessione 
function addClickable() {
    minusMin.addEventListener('click', lessMin)
    addMin.addEventListener('click', moreMin)
    minusBrk.addEventListener('click', lessBrk)
    addBrk.addEventListener('click', moreBrk)
}