function talk() {
    var isFound = new Boolean(false);
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
            var isFound = true
        }
    });
    Object.keys(who).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy who')
            document.getElementById("chatLog").innerHTML += ryszard + iam + "<br>";
            var isFound = true
        }
    });
    Object.keys(howareyou).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy howareyou')
            document.getElementById("chatLog").innerHTML += ryszard + iamok + "<br>";
            var isFound = true
        }
    });
    Object.keys(ok).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy ok')
            document.getElementById("chatLog").innerHTML += ryszard + ofcourse + "<br>";
            var isFound = true
        }
    });
    Object.keys(schedule).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy schedule')
            document.getElementById("chatLog").innerHTML += ryszard + schedulecheck + "<br>";
            var isFound = true
        }
    });
    Object.keys(parking).forEach(element => {
        if (user.toLowerCase().includes(element)) {
            console.log('znaleziono w tablicy parking')
            document.getElementById("chatLog").innerHTML += ryszard + parkingok + "<br>";
            var isFound = true
        }
    });

    if (user.isFound === true) {
        console.log('ZNALEZONO!')
            //document.getElementById("chatLog").innerHTML += ryszard + dontKnow + "<br>";

    } else {
        console.log('NIE ZNALEZONO')
        document.getElementById("chatLog").innerHTML += ryszard + " " + "<br>";
    }
}
//if (user.toLowerCase() in hello) {
//document.getElementById("chatLog").innerHTML += ryszard + hi + "<br>";

/* if (user in ok) {
         document.getElementById("chatLog").innerHTML += ryszard + ofcourse + "<br>";
     } else if (user in schedule) {
         document.getElementById("chatLog").innerHTML += ryszard + schedulecheck + "<br>";
     } else if (user in whereiswsei) {
    document.getElementById("chatLog").innerHTML += ryszard + wseiishere + "<br>";
} else
    if (user in exams) {
        document.getElementById("chatLog").innerHTML += ryszard + deanery + "<br>";
    } else if (user in teacoffe) {
        document.getElementById("chatLog").innerHTML += ryszard + maketeacoffe + "<br>";
    } else if (user in parking) {
        document.getElementById("chatLog").innerHTML += ryszard + parkingok + "<br>";
    } else if (user in understand) {
        document.getElementById("chatLog").innerHTML += ryszard + good + "<br>";
    } else if (user in ask) {
        document.getElementById("chatLog").innerHTML += ryszard + hear + "<br>";
    } else if (user in workdays) {
        document.getElementById("chatLog").innerHTML += ryszard + iamon + "<br>";
    } else if (user in time) {
        document.getElementById("chatLog").innerHTML += ryszard + timenow + "<br>";
    } else if (user in thanks) {
        document.getElementById("chatLog").innerHTML += ryszard + yourewelcome + "<br>";
    } else if (user in bye) {
        document.getElementById("chatLog").innerHTML += ryszard + byebye + "<br>";
    } else*/
/* if (isFound == false) {
     document.getElementById("chatLog").innerHTML += ryszard + dontKnow + "<br>";
 }*/