// document.getElementById() - získá element z html
/*const- proměná se neměmí,
 let- proměná se může měnit
 let number = 0;
const PI = 3.14;
console.log(number);
number = 10;
console.log(number);
console.log(PI);*/
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

// onclick na kliknutí
//() => {} arrow funkce

let numberofcookies = 0;

cookie.onclick = () => {
 /*numberofcookies = numberofcookies + 1;*/
 //numberofcookies +=1
 //++ - zvedá číslo o 1
 //-- - zmenšuje číslo o 1
 numberofcookies++;
 counter.innerHTML = "Cookies: " + numberofcookies;
 //counter.innerHTML -`Cookies: ${numberofcookies}`;
}