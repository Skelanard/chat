function talk() {
    var isFound = new Boolean(false); //deklaruję boolean'a który będzie sprawdzał czy element został znaleziony
    var user = document.getElementById("userBox").value;
    if (user === "") {
        return;
    }

    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += ja + user + "<br>";
    Object.keys(hello).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy hello')
            document.getElementById("chatLog").innerHTML += ryszard + hi + "<br>";
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
            Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(who).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy who')
            document.getElementById("chatLog").innerHTML += ryszard + iam + "<br>";
            isFound = !isFound;
        }
    });
    Object.keys(howareyou).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy howareyou')
            document.getElementById("chatLog").innerHTML += ryszard + iamok + "<br>";
            isFound = !isFound;
        }

    });
    Object.keys(ok).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy ok')
            document.getElementById("chatLog").innerHTML += ryszard + ofcourse + "<br>";
            isFound = !isFound;
        }
    });
    Object.keys(schedule).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy schedule')
            document.getElementById("chatLog").innerHTML += ryszard + schedulecheck + "<br>";
            isFound = !isFound;
        }
    });
    Object.keys(parking).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy parking')
            document.getElementById("chatLog").innerHTML += ryszard + parkingok + "<br>";
            isFound = !isFound;

        }
    });
    if (isFound === false) {
        /*po przeszukaniju wszystkich objektów z listy tylko jeśli wprowadzone dane nie zawierają fraz z listy, 
                to wartość isFound ma pozostać false*/
        document.getElementById("chatLog").innerHTML += ryszard + dontKnow + "<br>";
        /*i ma być wykonane to polecenie. Jednak to polecenie
               pozostaje wykonuje się odwrotnie, gdy element został znaleziony i powinien zmienić się na true,
                a gdy się nie znalazł to nic nie działa*/

    }
    window.scrollTo(0, document.body.offsetHeight)

}