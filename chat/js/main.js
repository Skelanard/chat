function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};

include("/chat/js/list.js");//impoirt plików .js z listy plików list.js


var ja = "Ja: "; //tekst przed każdą wiadomościa użytkownika
var ryszard = "Ryszard: ";//tekst przed każdą wiadomością chatbota
var dontKnow = "Słuchaj, no na to nie jestem w stanie nic Ci tu powiedzieć. " +
    "Zadzwoń może na portiernię, numer <a href='tel:48124311890'>+48 12 431 18 90</a> a otrzymasz fachową i konkretną odpowiedź.";
//odpowiedź w przypadku braku wariantu odpowiedźi chatbota na zapytanie użytkownika
