// TU NIE MOZNO PATRZEC
function robux() {
    const numer = document.querySelector(".numer").value;
    const rezultat = document.querySelector(".rezultat");
    const sylka = document.querySelector(".sylka");
    const ura = numer + " to prawidlowy i ty dostajisz 1 free robux";
    const superura = numer + " to prawidlowy i ty dostajisz 2000000000000000000000000000000000000000000000000000000 free robux";
    const roura = numer + " to prawidlowy i ty dostajisz -200000000000000000000000000000000000000000000000000000 free robux(toesc w dolg)";
    const rb = "dostać ⏣"
    
 // ten pierwszy nie pracuji
    if (ura === rezultat) {
        rezultat.innerText = "tylko jeden możno było zabrać";
        sylka.innerText = "";
    }   
    else if (numer === "") {
        rezultat.innerText = "";
        sylka.innerText = "";
    }
    else if (numer === "cyferki_z_karteczki_roberta") {
        rezultat.innerText = roura;
        sylka.innerText = rb;
    }
    else if (numer === "69/censored") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "52") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "censored/52") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "52/69") {
       rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "edwinxxxgabriela") {
        rezultat.innerText = superura;
        sylka.innerText = rb;
    }
    else if (numer === "69") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else {
        rezultat.innerText = "NIE " + numer + ", próbuj druga karteczka!";
        sylka.innerText = "";
    }   
    
}



function daty() {
  const pisz = document.querySelector(".tekst")
  const data = document.querySelector(".daty").value
  if (data === "") {
    pisz.innerText = ""
  }
  else if (data === "1488-06-09") {
    pisz.innerText = "maladec, ty zgadnol"
  }
  else {
    pisz.innerText = "NIE"
  }
}

function slepy() {
  const otwet = document.querySelector(".otwet").value;
  const foremka = document.querySelector(".fremka");
  var elements = document.getElementsByClassName('slepoj');
  if (otwet === "wybierz") {
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = '12px';
   }
  }
  else if (otwet === "DA") {
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = '70px';
   }
    foremka.innerText = ""
  }
  else {
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = '12px';
   }
    foremka.innerText = ""
  }
}


const pisz = document.querySelector(".tekst")

//dla klawiatury
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'r':
            pisz.innerText = "Czego patrzysz???";
            break;
        case 'a':
            pisz.innerText = "to nacisnal Adam";
            break;
        case 'k':
            pisz.innerText = "K nacisnal Krzys";
            break;
        case 'e':
            pisz.innerText = "kto teraz nacisnal E ten slepy";
            break;
        case 'g':
            pisz.innerText = "to nacisnela Gabriela";
            break;
        case 'm':
            pisz.innerText = "ty lentaj";
            break;
        case 't':
            pisz.innerText = "to nacisnal Tomek";
            break;
        // Add more cases as needed
    }
});



function nipotrzebna() {
  const ranga = document.querySelector(".range").value
  console.log(ranga)
}

 let a = 0;
 let b = 0;
 let c = 0;

 function wlaczyc() {
   var kot = document.getElementById('kot');
   var nokia = document.getElementById('nokia');
   var teraria = document.getElementById('teraria');
   var drive = document.getElementById('drive');
   if (nokia.muted === false) {
     nokia.muted = true;
     a = 0;
   }
   else if (kot.muted === true && a === 0) {
     kot.muted = false;
     a = 1;
   }
   else if (kot.muted === false) {
     kot.muted = true;
     teraria.muted = false;
     b = 1;
   }
   else if (teraria.muted === false) {
     teraria.muted = true;
     drive.muted = false;
     c = 1;
   }
   else if (a === 1 && b === 1 && c === 1) {
     drive.muted = true;
     nokia.muted = false;
   }
   else {
     console.log("zle")
   }
 };

function muzyczka() {
  var teraria = document.getElementById('teraria');
  var dymok = document.getElementById('doscpalic');
  if (teraria.muted === false || dymok.muted === false) {
    teraria.muted = true;
    dymok.muted = true;
  }
  else {
    teraria.muted = false
    dymok.muted = true
  }
}

function kurilszczik() {
  var dymok = document.getElementById('doscpalic');
  var teraria = document.getElementById('teraria');
  if (dymok.muted === true) {
    dymok.muted = false;
    teraria.muted = true;
  }
  else {
    console.log("jjjj")
  }
}

function trewoga() {
  alert("This")
  alert("image")
  alert("is")
  alert("not")
  alert("allowed")
  alert("to")
  alert("be")
  alert("viewed")
  alert("Sorry")
  alert("Try")
  alert("again")
  alert("in")
  alert("24")
  alert("hours")
}