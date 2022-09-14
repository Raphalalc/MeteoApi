let ville = document.querySelector('#ville');
let degre = document.querySelector('#temperature_label');
let changerVille = document.querySelector('#changer');
let city = 'paris';
ville.textContent= city;

changerVille.addEventListener('click',()=>{
    
        let formulaire = prompt('Veuillez choisir une ville');
        city = formulaire;
        ville.textContent= city;
        requeteAjax();
    

 })

function requeteAjax(){
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;

let requete = new XMLHttpRequest(); //Créer un objet
requete.open('GET', url); // Premier Paramètre GET /POST et deuxième paramètre url
requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); //Nous envoyons notre requête

// Dès qu'on reçoit une réponse, cette fonction est executée
requete.onload = function (){
    if ( requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response; //on stock la réponse
            let information = reponse.main.temp;
            degre.textContent = information;
        }
        
        else{
            alert('Un problème est intervenu, merci de revenir plus tard.');
        }
    }
}
}

requeteAjax();
 