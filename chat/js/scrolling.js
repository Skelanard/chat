window.onload = function() {
    //window.scrollTo(x,y)
    var scrolled;
    var timer;

    document.getElementById('send').onclick = function() {
        scrolled = window.pageYOffset;
        //window.scrollTo(0,0);
        scrollToBottom();
    }

    function scrollToBottom() {
        if (scrolled > 0) {
            window.scrollTo(0, 400);
            scrolled = scrolled - 50; //100 - скорость прокрутки
            timer = setTimeout(scrollToBottom, 200);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 400);
        }
    }
}