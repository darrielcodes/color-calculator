const prompt = require('prompt-sync')({sigint: true});

let userInput = prompt("Do you want to combine or deconstruct a color?: ")
let x = "combine"
let y = "deconstruct"


if (userInput === x){
    let color1 = prompt("Enter your first color: ")
    let color2 = prompt("Enter your second color: ")

    if ((color1 === "red") && (color2 === "blue") ||
    (color1 === "blue") && (color2 === "red")){
    console.log("purple")
}
    else if ((color1 === "red") && (color2 === "yellow") ||
    (color1 === "yellow") && (color2 === "red")){
    console.log("orange")
}
    else if ((color1 === "blue") && (color2 === "yellow") ||
    (color1 === "yellow") && (color2 === "blue")){
    console.log("green") 
    }
    else (console.log("error"))
}

if (userInput === y){
    let color3 = prompt("Enter a color to deconstruct: ")

    if (color3 === "purple"){
        console.log("red + blue")
    }
    else if(color3 === "orange"){
        console.log("red + yellow")
    }
    else if(color3 === "green"){
        console.log("blue + yellow")
    }
    else (console.log("error"))
}
