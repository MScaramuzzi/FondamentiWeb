//si istanzia un oggetto di tipo Date
var dt = new Date();

//permette di visualizzare le date nel calendario
function renderDate() {

    //permette di visualizzare il primo giorno del mese
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();


    /**si istanzia in questa variabile i giorni del mese precedente  
     * che saranno visualizzati in grigio
     */
    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();

    // array che contiene tutti i mesi
    var months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
    ]


    //setta il mese al mese corrente
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    // visualizza il primo giorno del mese corrente
    document.getElementById("date_str").innerHTML = dt.toDateString();

    //istanzia le celle della tabella
    var cells = "";

    /*loop che genera tutte le celle corrispondenti ognuna a un giorno
    del mese selezionati*/
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    console.log(day);
    //  loop che capisce quale data evidenziare come data di oggi
    for (i = 1; i <= endDate; i++) {
        // data di oggi
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
        else
        //incrementa cells  e continua a cercare la data di oggi
            cells += "<div>" + i + "</div>";
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

//permette di cambiare mese cliccando per mezzo delle frecce direzionali
function moveDate(para) {
    if (para == "prev") {
        dt.setMonth(dt.getMonth() - 1); //mese precedente
    } else if (para == 'next') {
        dt.setMonth(dt.getMonth() + 1); //mese successivo
    }
    renderDate();
}