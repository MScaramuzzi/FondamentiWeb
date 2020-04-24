

//console.clear();

// definisco la arrow function navSlide che sarà richiamata alla fine dello script//

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    //Togli la navbar col click
    burger.addEventListener('click', () => {

        //rendi la navbar invisibile all'utente
        nav.classList.toggle('nav-active');

        // Itera tutta la navbar link per link mediante il metodo forEach
        navLinks.forEach((link, index) => {

            /**si attiva solo se esiste un animazione ossia se la nav è aperta */
            if (link.style.animation) {
                //resetta l'animazione
                link.style.animation = ''
            } else {
                // definisco dinamicamente l'animazione a comparsa della navbar 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /10 + 0.5}s`;
            }
            console.log(index / 7);
        });

        //Animazione burger navbar
        burger.classList.toggle('toggle');

    });


}
//Richiama l'arrow function

navSlide();  