function hideCookieConsent() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.getElementById('cookie-consent').style.display = 'none';
    document.getElementById('cala').classList.remove('blurred');
  }
}

hideCookieConsent();


function acceptCookies() {
            document.getElementById('cookie-consent').style.display = 'none';
            document.getElementById('cala').classList.remove('blurred');
            // Set a cookie here if you want
        }

        function closeConsent() {
            document.getElementById('cookie-consent').style.display = 'none';
         document.getElementById('cala').classList.remove('blurred');
        }
        
const countdown = () => {
            const countDate = new Date('Jun 20, 2025 13:00:00').getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(gap / day);
            const hours = Math.floor((gap % day) / hour);
            const minutes = Math.floor((gap % hour) / minute);
            const seconds = Math.floor((gap % minute) / second);

            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
            
            //dni
            if (days === 1) {
              document.getElementById("dzien").innerHTML = "Dzień";
            }
            else {
              document.getElementById("dzien").innerHTML = "Dni";
            }
            
            //minuty
            if ((minutes === 1) || (minutes === 21) || (minutes === 31) || (minutes === 41) || (minutes === 51)) {
              document.getElementById("minuta").innerHTML = "Minuta";
            }
            else if (minutes === 0) {
              document.getElementById("minuta").innerHTML = "Minut";
            }
            
            else if ((minutes < 5 && minutes > 1) || (minutes > 21 && minutes < 25) || (minutes > 31 && minutes < 35) || (minutes > 41 && minutes < 45) || (minutes > 51 && minutes < 55)) {
              document.getElementById("minuta").innerHTML = "Minuty";
            }
            else {
              document.getElementById("minuta").innerHTML = "Minut";
            }
            
            //godziny
            if ((hours === 1) || (hours === 21)) {
              document.getElementById("godzina").innerHTML = "Godzina";
            }
            else if ((hours < 5 && hours > 1) || (hours > 21 && hours < 25)) {
              document.getElementById("godzina").innerHTML = "Godziny";
            }
            
            else {
              document.getElementById("godzina").innerHTML = "Godzin";
            }
            
            //sekundy
            if ((seconds === 1) || (seconds === 21) || (seconds === 31) || (seconds === 41) || (seconds === 51)) {
              document.getElementById("sekunda").innerHTML = "Sekunda";
            }
            else if (seconds === 0) {
              document.getElementById("sekunda").innerHTML = "Sekund";
            }
            else if ((seconds < 5 && seconds > 1) || (seconds > 21 && seconds < 25) || (seconds > 31 && seconds < 35) || (seconds > 41 && seconds < 45) || (seconds > 51 && seconds < 55)) {
              document.getElementById("sekunda").innerHTML = "Sekundy";
            }
            else {
              document.getElementById("sekunda").innerHTML = "Sekund";
            }
        };

        setInterval(countdown, 1000);
        