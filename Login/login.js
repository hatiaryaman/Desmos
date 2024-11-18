// imports
import {db} from "../Main-Page/base.js"
import {getDatabase, ref, set, child, update, remove, get, onValue} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

// returning to the main page
var returnButton = document.getElementById("return")

returnButton.onclick = function(){
    window.location.href = '../Main-Page/main.html';
}

// Potential wrong email/password
var error = document.createElement("p")

// logging in
var usernameEmail = document.getElementById("username")
var passwordInput = document.getElementById("password")
var loginButton = document.getElementById("login")

// removing error popup when refocussing
usernameEmail.addEventListener("focus", () => {
    try{
        document.body.removeChild(error)
    } catch{
        console.log()
    }
})

passwordInput.addEventListener("focus", () => {
    try{
        document.body.removeChild(error)
    } catch{
        console.log()
    }
})

loginButton.onclick = async () => {
    // removing error popup when refocussing
    try{
        document.body.removeChild(error)
    } catch{
        console.log()
    }

    let usernameOrEmail = usernameEmail.value
    let password = passwordInput.value

    // getting all users
    let usernames = []
    let emails = []
    let passwords = []

    let users = await get(child(ref(db), "Users")).then((snapshot) => {return snapshot.val().users})

    for (let i = 1; i < users + 1; i++) {
        await get(child(ref(db), "Users/" + i)).then((snapshot) => {
            if(snapshot.exists()){
                usernames.push(snapshot.val().username)
                emails.push(snapshot.val().email)
                passwords.push(snapshot.val().password)
            }
        })
    }

    // checking username, email, or password match
    let usernameEmailCorrect = (usernames.includes(usernameOrEmail) || (emails.includes(usernameOrEmail)))
    let passwordCorrect = (passwords.includes(password))

    if (usernameEmailCorrect) {
        if (passwordCorrect) {

        } else {
            error.innerHTML = "Incorrect password"
            document.body.appendChild(error)
        }
    } else {
        error.innerHTML = "Username or email does not exist"
        document.body.appendChild(error)
    }
}
