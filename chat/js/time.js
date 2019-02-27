var t = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var d = new Date().toLocaleDateString("pl", options);

timenow = "Czekaj, już sprawdzam...To tak: " + t + ". No i dzisiaj jest " + d + " roku. Ale szybko ten czas leci...";



var time = {
    "Godzina": "",
    "Czas": "",
    "Która teraz jest godzina?": "",
    "Który jest dzisiaj?": "",
}