// import cipher from './cipher.js';

//  console.log(cipher);

// variavel para o botão Encrypt
var crip = document.getElementById ("crip");
crip.addEventListener("click", cipher);


// var decrip = document.getElementById("decrip");
// decrip.addEventListener("click", decipher);


let tamDoAlfabeto = 26;
let codeASC = 65;
let novaMensagem = "";


  function cipher (evt) {
    evt.preventDefault(); 
    
    let myText = document.getElementById ("myText").value;
    let offset = Number(document.getElementById("choose").value);

    for (let i = 0; i < myText.length; i++){
        
        let codigo = ((myText.charCodeAt(i)- codeASC + offset) % tamDoAlfabeto) + codeASC;
        novaMensagem += String.fromCharCode(codigo)
        console.log(novaMensagem)
        
        // document.getElementById("myText").innerHTML = "";
        
    }
   
} 
 