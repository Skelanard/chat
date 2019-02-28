function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};

include("/chat/js/list.js");


var ja = "Ja: ";
var ryszard = "Ryszard: ";
var dontKnow = "Słuchaj, no na to nie jestem w stanie nic Ci tu powiedzieć. " +
    "Zadzwoń może na portiernię, numer <a href='tel:48124311890'>+48 12 431 18 90</a> a otrzymasz fachową i konkretną odpowiedź.";