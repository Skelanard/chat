function talk() {
    var isFound = false; //deklaruje boolean'a który będzie sprawdzał czy element został znaleziony
    var user = document.getElementById("userBox").value; // otrzymanie wartości frazy użytkownika, wpisanej do okna dialogu
    if (user === "") {
        return;
    } //blokada wysłanie wiadomości pustej

    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += ja + user + "<br>"; //funckcja wyświetlania wiadomości użytkownika w oknie chata
    Object.keys(hello).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy hello')
            document.getElementById("chatLog").innerHTML += ryszard + hi + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(who).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy who')
            document.getElementById("chatLog").innerHTML += ryszard + iam + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
               zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(russian).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy who')
            document.getElementById("chatLog").innerHTML += ryszard + russianno + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
               zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(howareyou).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy howareyou')
            document.getElementById("chatLog").innerHTML += ryszard + iamok + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
             zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }

    });
    Object.keys(english).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy howareyou')
            document.getElementById("chatLog").innerHTML += ryszard + englishno + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
             zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }

    });
    Object.keys(ok).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy ok')
            document.getElementById("chatLog").innerHTML += ryszard + ofcourse + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(time).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy time')
            document.getElementById("chatLog").innerHTML += ryszard + timenow + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(schedule).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy schedule')
            document.getElementById("chatLog").innerHTML += ryszard + schedulecheck + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */
        }
    });
    Object.keys(parking).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy parking')
            document.getElementById("chatLog").innerHTML += ryszard + parkingok + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */

        }
    });
    Object.keys(understand).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy parking')
            document.getElementById("chatLog").innerHTML += ryszard + good + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */

        }
    });
    Object.keys(thanks).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy parking')
            document.getElementById("chatLog").innerHTML += ryszard + yourewelcome + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */

        }
    });
    Object.keys(bye).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy parking')
            document.getElementById("chatLog").innerHTML += ryszard + byebye + "<br>";
            /*przeszukuję każdyj element w objekcie, w razie obecności frazy w kluczach zwraca odpowiedź, zadeklarowaną w plikie,
            zawierającym objekt*/
            isFound = !isFound;
            /*element został znaleziony, dla tego wartość isFound ma zmienić się na true.
                       Objekty poniżej powinni działać na takiej samej zasadzie, jednak wygląda na to, iż wartość się nie zmienia */

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
    window.scrollTo(0, document.body.offsetHeight) //przejście biegunka na dół strony po każdym wysłaniu wiadomości

}