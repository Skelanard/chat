//import plików dla wykorzystywania w projekcie 
include("/chat/js/talk.js");

include("/chat/js/hello.js");
include("/chat/js/who.js");
include("/chat/js/ask.js");
include("/chat/js/howareyou.js");
include("/chat/js/schedule.js");
include("/chat/js/parking.js");
include("/chat/js/exams.js");
include("/chat/js/time.js");
include("/chat/js/whereiswsei.js");
include("/chat/js/teacoffe.js");
include("/chat/js/understand.js");
include("/chat/js/workdays.js");
include("/chat/js/ok.js");
include("/chat/js/thanks.js");
include("/chat/js/bye.js");

//funkcja importująca powyższe pliki
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
