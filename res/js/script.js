
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgr = document.getElementById("upgr");
const auto = document.getElementById("auto");
const farm = document.getElementById("farm");
const lv = document.getElementById("level");
const lv2 = document.getElementById("level2");
const lv3 = document.getElementById("level3");
const lv4 = document.getElementById("level4");
const space = document.getElementById("space");

let numberofcookies = 0;
let cookieIncrease = 1;
let autoIncrease = 0;
let autofarm = 0;
let level = 0;
let level2 = 0;
let level3 = 0;
let level4 = 0;
let autoclicker;
let autospace = 0;

cookie.onclick = () => {
  numberofcookies += cookieIncrease;
  counter.innerHTML = "Cookies: " + numberofcookies;
  //counter.innerHTML -`Cookies: ${numberofcookies}`;
};

upgr.onclick = () => {
  if (numberofcookies >= 50) {
    //odecist 50
    numberofcookies -= 50;
    //zobrazit susenky
    counter.innerHTML = `Cookies: ${numberofcookies}`;
    //zvedout klikani
    cookieIncrease++;
    level++;
    lv.innerText="level: "+level;
  }
};
// {} scope-rozsah
// 2zp jak udělat funkci

function cheats() {
  numberofcookies += 1000000;
  counter.innerHTML = `Cookies: ${numberofcookies}`;
};

const supercheats = () => {
  numberofcookies += 1500000;
  counter.innerHTML = `Cookies: ${numberofcookies}`;
};

//částka je přiřazena hned od startu programu
cheats();
auto.onclick = () => {
  if (numberofcookies >= 100) {
    //-100
    numberofcookies -= 100;
    //zobrazit
    counter.innerHTML = `Cookies: ${numberofcookies}`;
    autoIncrease++;
    level2++;
    lv2.innerText="level: "+level2;
    //clear
    clearInterval(autoclicker);
    //opakování
    autoclicker = setInterval(() => {
        console.log("Interval")
    numberofcookies += autoIncrease;
        counter.innerHTML = `Cookies: ${numberofcookies}`;

    }, 1000);

  }

};
farm.onclick = () => {
    if (numberofcookies >= 2000) {
      //-100
      numberofcookies -= 2000;
      //zobrazit
      counter.innerHTML = `Cookies: ${numberofcookies}`;
      autoIncrease+= 20;
      level3++;
      lv3.innerText="level: "+level3;
      //clear
      clearInterval(autoclicker);
      //opakování
      autoclicker = setInterval(() => {
          console.log("Interval")
      numberofcookies += autoIncrease;
          counter.innerHTML = `Cookies: ${numberofcookies}`;
  
      }, 1000);
  
    }
  
  };
  space.onclick = () => {
    if (numberofcookies >= 5000) {
      //-100
      numberofcookies -= 5000;
      //zobrazit
      counter.innerHTML = `Cookies: ${numberofcookies}`;
      autoIncrease+= 50;
      level4++;
      lv4.innerText="level: "+level4;
      //clear
      clearInterval(autoclicker);
      //opakování
      autoclicker = setInterval(() => {
          console.log("Interval")
      numberofcookies += autoIncrease;
          counter.innerHTML = `Cookies: ${numberofcookies}`;
  
      }, 1000);
  
    }
  
  };
 