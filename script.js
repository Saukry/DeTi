// Zabezpieczenia
const PASSWORD = "DeTiler2025";
const SECURITY_QUESTION = "Jak nazywa się Twój pies?";
const SECURITY_ANSWER = "Burek";
const TOKEN = "X7B4-K9P2-L3M8-Q5T1";

function login() {
    const password = document.getElementById("password").value;
    const securityQuestion = document.getElementById("securityQuestion").value;
    const token = document.getElementById("token").value;
    const error = document.getElementById("error");

    if (password === PASSWORD && securityQuestion === SECURITY_QUESTION && token === TOKEN) {
        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";
        alert("Zalogowano! Zmień hasło i pytanie w ustawieniach.");
    } else {
        error.innerText = "Błędne dane logowania!";
    }
}

// Symulacja AR
function simulateAR() {
    const area = Math.random() * 10; // Symulacja skanowania (0-10 m²)
    document.getElementById("area").innerText = area.toFixed(1) + " m²";
    alert("Skanowanie AR: Powierzchnia obliczona na " + area.toFixed(1) + " m²");
}

// Generowanie oferty
function generateOffer() {
    const basePrice = 1950; // zł netto
    const hiddenCosts = 150; // zł
    const total = basePrice + hiddenCosts;
    document.getElementById("offer-result").innerText = `Oferta: ${basePrice} zł netto + ${hiddenCosts} zł (koszty ukryte) = ${total} zł brutto`;
    alert("Oferta wygenerowana w 3.8 s!");
}

// Zabezpieczenia
const PASSWORD = "DeTiler2025";
const SECURITY_QUESTION = "Jak nazywa się Twój pies"; // Tekst pytania
const ANSWER = "Burek"; // Poprawna odpowiedź na pytanie
const TOKEN = "X7B4-K9P2-L3M8-Q5T1";

function login() {
    const password = document.getElementById("password").value;
    const securityQuestion = document.getElementById("securityQuestion").value; // Użytkownik wpisuje odpowiedź
    const token = document.getElementById("token").value;
    const error = document.getElementById("error");

    if (password === PASSWORD && securityQuestion === ANSWER && token === TOKEN) {
        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";
        alert("Zalogowano! Zmień hasło i pytanie w ustawieniach.");
    } else {
        error.innerText = "Błędne dane logowania!";
    }
}

// Symulacja AR
function simulateAR() {
    const area = Math.random() * 10; // Symulacja skanowania (0-10 m²)
    document.getElementById("area").innerText = area.toFixed(1) + " m²";
    alert("Skanowanie AR: Powierzchnia obliczona na " + area.toFixed(1) + " m²");
}

// Generowanie oferty
function generateOffer() {
    const basePrice = 1950; // zł netto
    const hiddenCosts = 150; // zł
    const total = basePrice + hiddenCosts;
    document.getElementById("offer-result").innerText = `Oferta: ${basePrice} zł netto + ${hiddenCosts} zł (koszty ukryte) = ${total} zł brutto`;
    alert("Oferta wygenerowana w 3.8 s!");
}
