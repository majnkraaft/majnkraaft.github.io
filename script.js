// TU NIE MOZNO PATRZEC
function robux() {
    const numer = document.querySelector(".numer").value;
    const rezultat = document.querySelector(".rezultat");
    const sylka = document.querySelector(".sylka");
    const ura = numer + " to prawidlowy i ty dostajisz 1 free robux";
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
    else if (numer === "1488/69") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "69/1488") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "52") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "1488/52") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "52/69") {
        rezultat.innerText = ura;
        sylka.innerText = rb;
    }
    else if (numer === "1488") {
        rezultat.innerText = ura;
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