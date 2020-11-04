import cipher from './cipher.js';

 console.log(cipher);



// var decrip = document.getElementById("decrip");
// decrip.addEventListener("click", decipher);


const tamDoAlfabeto = 26;
const codeASC = 65;
// let mensagemCrip = "";

// variavel para o botão Encrypt
var crip = document.getElementById ("crip");
crip.addEventListener("click", criptar);

  function criptar (evt) {
    evt.preventDefault(); 
  
    let myText = document.getElementById("myText").value.toUpperCase();
    let offset = Number(document.getElementById("choose").value);
    let mensagemCrip = "".toUpperCase();
    // console.log(mensagemCrip)
    mensagemCrip;
    
    
    for (let i = 0; i < myText.length; i++){
      let codigoCaractere = myText.charCodeAt(i);
      let codigo = ((codigoCaractere - codeASC + offset) % tamDoAlfabeto) + codeASC;
      mensagemCrip += String.fromCharCode(codigo);
      codigo;
      // mensagemCrip += String.fromCharCode(codigo);
      
      // document.getElementById("myText").innerHTML = "";
      
    }
    alert(mensagemCrip)
 
  }