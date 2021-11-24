/**
 * chiedi email all'utente
 * controlla che sia nella lista di chi può accedere
 * stampa un messaggio appropriato sull'esito del controllo
 */

const emailList = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email4@gmail.com"];
const buttonControl = document.querySelector('.button');
const emailUser = document.getElementById("email")
const answersCheck = document.getElementById('answer');
let check = 0;

buttonControl.addEventListener ( 'click', function() {
   for (i=0; i<=emailList.length; ++i) {
       if (emailUser.value.toLowerCase() == emailList[i]) {
           check = 1;
       }
    }
    
    if (check==1) {
        console.log("email presente nel database");
        answersCheck.innerHTML = "email " + emailUser.value.toLowerCase() + " presente nel database";
    } else {
        console.log("email non presente nel database");
        answersCheck.innerHTML = "email " + emailUser.value.toLowerCase() + " non presente nel database";
    }
});