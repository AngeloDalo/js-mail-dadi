/**
 * genera numero random da 1 a 6 per il computer e per noi
 * stabilire vincitore in base al punteggio più alto
 */

const button = document.querySelector(".button");
const userReuslt = document.querySelector(".user-number");
const cpuReuslt = document.querySelector(".CPU-number");
const winner = document.querySelector(".winner");
const point = document.querySelector(".point");
let win = 0;
let lost = 0;
let draw = 0; 

button.addEventListener ( 'click', function() {
    let numberUser = Math.floor(Math.random() * 6) + 1;
    let numberCpu = Math.floor(Math.random() * 6) + 1;
    userReuslt.innerHTML = numberUser;
    cpuReuslt.innerHTML = numberCpu;

    if (numberUser > numberCpu) {
        winner.innerHTML = "HAI VINTO";
        win += 1;
        point.innerHTML = win + "-" + draw + "-" + lost;
    } else if (numberUser < numberCpu) {
        winner.innerHTML = "HAI PERSO";
        lost += 1;
        point.innerHTML = win + "-" + draw + "-" + lost;

    } else {
        winner.innerHTML = "HAI PAREGGIATO";
        draw += 1;
        point.innerHTML = win + "-" + draw + "-" + lost;

    }
 });