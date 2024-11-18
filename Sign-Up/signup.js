// imports
import {db} from "../Main-Page/base.js"
import {getDatabase, ref, set, child, update, remove, get, onValue} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"


// returning to main page
var returnButton = document.getElementById("return")

returnButton.onclick = function(){
    window.location.href = '../Main-Page/main.html';
}

// signing up
var usernameInput = document.getElementById("username")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var confrimButton = document.getElementById("confrim")

confrimButton.onclick = function() {
    let username = usernameInput.value
    let email = emailInput.value
    let password = passwordInput.value

    get(child(ref(db), "Users")).then((snapshot) => {
        if(snapshot.exists()){
            update(ref(db, "Users"), {
                "users": snapshot.val().users + 1
            }).then(
                set(ref(db, "Users/" + (parseInt(snapshot.val().users) + 1)), {
                    "username": username,
                    "email": email,
                    "password": password
                })
            )
        } else {
            set(ref(db, "Users"), {
                "users": 1
            }).then(
                set(ref(db, "Users/1"), {
                    "username": username,
                    "email": email,
                    "password": password
                })
            )
        }
    })

    usernameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
}
