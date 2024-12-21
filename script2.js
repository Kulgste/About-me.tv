const codingBtn = document.querySelector("#codingBtn")
const popup = document.querySelector(".popup")
const content = document.querySelectorAll(".content")
const closingBtn = document.querySelector("#closingBtn")
const pageBlur = document.querySelector(".page")
console.log("yes")

content.forEach(function(button){
    button.addEventListener("mouseover",function(blurring) {
        pageBlur.classList.add("blurred")
    
    })
    button.addEventListener("mouseout",function(blurring) {
        pageBlur.classList.remove("blurred")
    
    })

}) 



codingBtn.onclick = function (){
    console.log("yipped")
    popup.style.display = "flex"
    pageBlur.classList.add("blurreds")
}
closingBtn.onclick = function (){
    console.log("yipped")
    popup.style.display = "none"
    pageBlur.classList.remove("blurreds")
}