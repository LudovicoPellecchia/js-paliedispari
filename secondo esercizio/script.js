const verifyBtn = document.querySelector(".verify-btn")

function palindromFnc(word) {
    
    const wordLength = word.length; 

    for (let i = 0; i < wordLength; i++){  
        if (word[i] !== word[wordLength - 1 - i]){
            return false
        }
    }
    return true
}

verifyBtn.addEventListener("click", function(){
    const userWord = document.getElementById("text-input").value

    console.log(palindromFnc(userWord))
    
})