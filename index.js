import cipher from './cipher.js';
//  console.log(cipher);

var crip = document.getElementById ("crip");
crip.addEventListener("click", criptar);

var resultCrip = document.getElementById("result").innerHTML;
var resultDecrip = document.getElementById("result").innerHTML;



function criptar (evt) {
    evt.preventDefault();
    let myText = document.getElementById("myText").value;
    let myText2 = myText.toString().toUpperCase();
    let offset = Number(document.getElementById("choose").value);    
      
    document.getElementById("result").innerHTML = cipher.encode(offset, myText2)
}

var decrip = document.getElementById("decrip");
decrip.addEventListener("click", descriptar);

function descriptar (evt){
    evt.preventDefault()
    let myText = document.getElementById("myText").value;
    let myText2 = myText.toString().toUpperCase();
    let offset = Number(document.getElementById("choose").value);


    document.getElementById("result").innerHTML = cipher.decode(offset, myText2)
}