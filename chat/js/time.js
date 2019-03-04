var t = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"); //deklarowanie zmiennej czasu, formatowanie czasu      
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //ustawienia formatowania dzisiejszej daty
var d = new Date().toLocaleDateString("pl", options); //deklaracja dzisiejszej daty, ustawenie używanie polskiego formatu daty

var timenow = "Czekaj, już sprawdzam...To tak: " + t + ". No i dzisiaj jest " + d + " roku. Ale szybko ten czas leci...";



var time = { //zbiór fraz zapytań o aktualnym czasie i dzisiejszą datę
    "godzina": "",
    "czas": "",
    "data": "",
    "który jest dzisiaj?": "",
    "która jest teraz?": "",
}