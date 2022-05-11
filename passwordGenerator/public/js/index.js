let passwordElements = []
let randomPasswords 

function generatePasswords(){
    let symbols = [1,2,3,4,5,6,7,8,9,0,"!","@","#","$","%","^","&","*","<",">","q","w","e","r","t","y","u","i","o","p","a","s","d","f","?","f", "g","h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
    let sign
    let randomPasswords=[]
    for(let k = 0; k < 4; k++){
        sign = ""
            for(let count = 0; count<15; count++){
                let i = Math.floor(Math.random()* symbols.length )
                let randomSymbol = symbols[i]
                sign += randomSymbol
            }
        randomPasswords.push(sign)
    }
    return(randomPasswords)
}

function assignPasswords(){
    randomPasswords = generatePasswords()
        passwordElements = document.getElementsByClassName("new-passwords")
        for(c = 0; c < passwordElements.length; c++){
            passwordElements[c].textContent = randomPasswords[c]
    }
}

function copyToClipboard(n){
    navigator.clipboard.writeText(randomPasswords[n]).then(() => {
        alert("Copied to clipboard");
    });
}
