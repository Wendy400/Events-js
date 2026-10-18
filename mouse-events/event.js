//an event listener - listens for a specific action triggered by user that is recognized by web browser(event) to create interactive web pages. 
// There are mouse events, keyboard events, form events, page/window events.
// starting with mouse events a user can click , mouseover, mouseout. see below:
// .addEventListener(event, callback or anonymous function or arrow function)

const myBox = document.getElementById("myBox");

//.....callback function
// function changeColor(event){
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent ="Ouch!🙄"

// }
//myBox.addEventListener("click", changeColor)


//....anonymous function....
// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent ="Ouch!🙄"


// })

//.....arrow function
myBox.addEventListener("click", event =>{
    event.target.style.backgroundColor="tomato"
    event.target.textContent ="Ouch!🙄"


})

//mouse over
myBox.addEventListener("mouseover", event=>{
    event.target.style.backgroundColor="lightblue"
    event.target.textContent ="Dont do it"
})


//mouseout
myBox.addEventListener("mouseout", event=>{
    event.target.style.backgroundColor="lightgreen"
    event.target.textContent ="Click here 😎"
})


//here eliminate using target, because the element we are targeting is different
const button= document.getElementById("myBtn")
const boxJs = document.getElementById("myBox2")
button.addEventListener("click", event => {
    boxJs.style.backgroundColor="aqua"
    boxJs.textContent ="I heard You Clicking Button🤨😱"
})

button.addEventListener("mouseover", event => {
    boxJs.style.backgroundColor="gold"
    boxJs.textContent ="You want to Click Button🧐 i can see"
})


button.addEventListener("mouseout", event => {
    boxJs.style.backgroundColor="lightPink"
    boxJs.textContent ="Learning eventListeners🥳 "
})










