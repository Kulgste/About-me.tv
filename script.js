const lightBtn = document.querySelector("#userInput")
const light = document.querySelector(".header")
const footer = document.querySelector(".footer")
const body = document.querySelector(".body")
const head = document.querySelector(".head")
const no = document.querySelector("#no")
const yes = document.querySelector("#yes")
const pop = document.querySelector(".content")
const popup = document.querySelector(".popup")
const button = document.querySelector(".popup button")
const submit = document.querySelector("#sub")
const form = document.querySelector("#Contact")
const email = document.querySelector("#emailList")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emaillist = []
let counter1 = 0

lightBtn.onclick = function (){  
    if (counter1 === 1) {
        light.style.backgroundColor = "#333"
        footer.style.backgroundColor = "#333"
        body.style.backgroundColor = "#5a1919"
        head.style.backgroundColor = "#5a1919"
        counter1 = 0;
    }
    else{
    footer.style.backgroundColor = "aliceblue"
    light.style.backgroundColor = "aliceblue"
    body.style.backgroundColor = "aliceblue"
    head.style.backgroundColor = "aliceblue"
    counter1 ++
    }
}

yes.onclick = function () {
    event.preventDefault();
    pop.style.display = "block"; // Change 'content' to 'pop'
     button.style.display = "none"
    console.log("Yes");
}
no.onclick = function () {
    event.preventDefault();
    popup.style.display = "none"; // Change 'content' to 'pop'
    console.log("Yes");
}

form.addEventListener("submit",function(event) {
 const email2 = email.value
 
 if (!emailRegex.test(email2)){
    event.preventDefault();
    email.style.textDecoration = "underline red"
 }
    else {
        emaillist.push(email2)
        event.preventDefault();
        popup.style.display = "none"
        console.log(emaillist)
    }

 
})

