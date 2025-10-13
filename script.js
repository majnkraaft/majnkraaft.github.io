// TU NIE MOZNO PATRZEĆ
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
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
  var krutoj = document.getElementById('krutoj');
  var anphoton = document.getElementById('anphoton');
  var czotko = document.getElementById('czotko');
  if (teraria.muted === false) {
    teraria.muted = true;
  }
  else {
    teraria.muted = false;
    dymok.muted = true;
    swadba.muted = true;
    terorist.muted = true;
    krutoj.muted = true;
    anphoton.muted = true;
    czotko.muted = true;
  }
}

//jak ciskasz na fotki
function kurilszczik() {
  var dymok = document.getElementById('doscpalic');
  var anphoton = document.getElementById('anphoton');
  var teraria = document.getElementById('teraria');
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
 var krutoj = document.getElementById('krutoj');
 var czotko = document.getElementById('czotko');
  if (dymok.muted === true) {
    dymok.muted = false;
    teraria.muted = true;
    swadba.muted = true;
    terorist.muted = true;
    krutoj.muted = true;
    anphoton.muted = true;
    czotko.muted = true;
    dymok.play()
  }
  else {
    dymok.muted = false;
    dymok.play()
  }
  dymok.play()
}

function swadba() {
  var anphoton = document.getElementById('anphoton');
  var dymok = document.getElementById('doscpalic');
  var teraria = document.getElementById('teraria');
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
  var krutoj = document.getElementById('krutoj');
  var czotko = document.getElementById('czotko');
  swadba.muted = false;
  terorist.muted = true;
  teraria.muted = true;
  dymok.muted = true;
  krutoj.muted = true;
  anphoton.muted = true;
  czotko.muted = true;
  swadba.play()
}

function czotko() {
  var anphoton = document.getElementById('anphoton');
  var dymok = document.getElementById('doscpalic');
  var teraria = document.getElementById('teraria');
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
  var krutoj = document.getElementById('krutoj');
  var czotko = document.getElementById('czotko');
  czotko.muted = false;
  swadba.muted = true;
  terorist.muted = true;
  teraria.muted = true;
  dymok.muted = true;
  krutoj.muted = true;
  anphoton.muted = true;
  czotko.play()
}

function terorist() {
  var anphoton = document.getElementById('anphoton');
  var dymok = document.getElementById('doscpalic');
  var teraria = document.getElementById('teraria');
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
  var krutoj = document.getElementById('krutoj');
  var czotko = document.getElementById('czotko');
  swadba.muted = true;
  terorist.muted = false;
  teraria.muted = true;
  dymok.muted = true;
  krutoj.muted = true;
  anphoton.muted = true;
  czotko.muted = true;
  terorist.play()
}

function krutoj() {
  var anphoton = document.getElementById('anphoton');
  var dymok = document.getElementById('doscpalic');
  var teraria = document.getElementById('teraria');
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
  var krutoj = document.getElementById('krutoj');
  var czotko = document.getElementById('czotko');
  swadba.muted = true;
  terorist.muted = true;
  teraria.muted = true;
  dymok.muted = true;
  anphoton.muted = true;
  krutoj.muted = false;
  czotko.muted = true;
  krutoj.play()
}


function anphoton() {
  var anphoton = document.getElementById('anphoton');
  var dymok = document.getElementById('doscpalic');
  var teraria = document.getElementById('teraria');
  var swadba = document.getElementById('swadba');
  var terorist = document.getElementById('terorist');
  var krutoj = document.getElementById('krutoj');
  var czotko = document.getElementById('czotko');
  swadba.muted = true;
  terorist.muted = true;
  teraria.muted = true;
  dymok.muted = true;
  krutoj.muted = true;
  anphoton.muted = false;
  czotko.muted = true;
  anphoton.play()
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

function opasno() {
  alert("Zakryj drzwi albo chociaby ZMNIEJSZ DŹWIĘK!!!")
}

//dla latającego
const object = document.getElementById('lata');
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let dx = (Math.random() - 0.5) * 10;
        let dy = (Math.random() - 0.5) * 10;

        function animate() {
            x += dx;
            y += dy;

            if (x <= 0 || x >= window.innerWidth - 50) {
                dx = -dx;
            }
            if (y <= 0 || y >= window.innerHeight - 50) {
                dy = -dy;
            }

            object.style.left = x + 'px';
            object.style.top = y + 'px';

            requestAnimationFrame(animate);
        }

        animate();
        
        
//latające zdjęcie albo GIF
const img = document.getElementById('bouncingImage');
let posX = 0;
let posY = 0;
let velocityX = 100; // Adjust speed as needed
let velocityY = 100;

function moveImage() {
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    posX += velocityX;
    posY += velocityY;

    if (posX + imgWidth > windowWidth || posX < 0) {
        velocityX *= -1; // Reverse direction on X-axis
    }
    if (posY + imgHeight > windowHeight || posY < 0) {
        velocityY *= -1; // Reverse direction on Y-axis
    }

    img.style.left = posX + 'px';
    img.style.top = posY + 'px';

    requestAnimationFrame(moveImage);
}

moveImage();
