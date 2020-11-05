import cipher from './cipher.js';

 console.log(cipher);


const tamDoAlfabeto = 26;
const codeASC = 65;

// variavel para o botão Encrypt
var crip = document.getElementById ("crip");
crip.addEventListener("click", criptar);

  function criptar (evt) {
    evt.preventDefault(); 
  
    let myText = document.getElementById("myText").value.toUpperCase();
    let offset = Number(document.getElementById("choose").value);
    let mensagemCrip = "".toUpperCase();
    mensagemCrip;
    
    
    for (let i = 0; i < myText.length; i++){
      let codigoCaractere = myText.charCodeAt(i);
      let codigo = ((codigoCaractere - codeASC + offset) % tamDoAlfabeto) + codeASC;
      mensagemCrip += String.fromCharCode(codigo);
      codigo;
      
      
      // document.getElementById("myText").innerHTML = "";
      
    }
    alert(mensagemCrip)
 
  }



var decrip = document.getElementById("decrip");
decrip.addEventListener("click", descriptar);

  function descriptar (evt){
    evt.preventDefault();
    let myText = document.getElementById("myText").value.toUpperCase();
    let offset = Number(document.getElementById("choose").value);
    let mensagemDecrip = "".toUpperCase();
    mensagemDecrip;

    for (let i = 0; i < myText.length; i++){
      let codigoCaractere = myText.charCodeAt(i);
      let codigo2 = ((codigoCaractere + codeASC - offset) % tamDoAlfabeto) + codeASC;
      mensagemDecrip += String.fromCharCode(codigo2);
      codigo2;

    }
    alert(mensagemDecrip)
  }