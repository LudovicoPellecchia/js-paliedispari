const evenOddSelect = document.getElementById("even-odd-selector").value
const playBtn = document.querySelector(".play-btn")
const userInput = document.getElementById("user-input")
const winOutput = document.getElementById("win-output")
const loseOutput = document.getElementById("lose-output")


function pcValue(min, max) {
    const finalNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return finalNum
}
const pcNumber = pcValue (1 , 5)


function evenOdd (number) {
    const even = "pari"
    const odd = "dispari"
    if (number % 2 === 0) {
        return even
    }
    else{
        return odd
    }
}

playBtn.addEventListener("click", function(){
    const userNumb = document.getElementById("number-input").value

    if (userNumb > 5){
        alert("Inserisci un numero valido")
    }
    else {
        userInput.innerHTML+= ("Il tuo numero è " + userNumb)
    }

    const sumNumbers= parseInt(userNumb) + pcNumber


    if (evenOdd(sumNumbers) === evenOddSelect) {
        winOutput.innerHTML+=("Hai vinto")
    }
    else{
        loseOutput.innerHTML+=("Hai perso")
    }
})