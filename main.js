//la classe del burger non apre il burger ma lo apre la <a> padre perciò devo selezionarlo
const openMenu = document.querySelector("div.header-right i");
// seleziono l'elemento corretto usato console per comprendere l'elemento selezionato
console.log(openMenu);

// seleziono la classe del burger per utilizzarla in seguito
const openBurger = document.querySelector("div.hamburger-menu");
console.log(openBurger);
//aggiungo evento sul click
openMenu.addEventListener('click',
    function(){
        openBurger.style.display = "block";
    }
    );
// adesso seleziono l'elemento di chiusura del menu
const closeMenu = document.querySelector("a.close i");
// uso console per comprendere se ho selezionato il corretto elemento nel DOM
console.log(closeMenu);

//aggiungo evento sul click
closeMenu.addEventListener('click',
    function(){
        openBurger.style.display = "none";
    }
    );