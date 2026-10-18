//here we will learn key events , keyup and keydown
//the same occurs as in mouse events : document.addEventListener(event,callback)


const mybox= document.getElementById("myBox")
 document.addEventListener("keydown", event =>{
    mybox.textContent="you pressed a key"
    mybox.style.backgroundColor="indigo"
 })
 
 document.addEventListener("keyup", event =>{
    mybox.textContent="Key Events"
    mybox.style.backgroundColor="palevioletred"
 })

 //using arrow key to move elements
 