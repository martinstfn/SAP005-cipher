
const cipher = {
  encode(offset, myText) {
    var tamDoAlfabeto = 26;
    var codeASC = 65;
    let resultCrip = "".toUpperCase();
    

    for (var i = 0; i < myText.length; i++) {

      var codigoCaractere = myText.charCodeAt(i);
      if (codigoCaractere >= 65 && codigoCaractere <= 90) {
        let codigo = ((codigoCaractere - codeASC + offset) % tamDoAlfabeto) + codeASC;
        resultCrip += String.fromCharCode(codigo);
      } else {
        resultCrip += String.fromCharCode(codigoCaractere);
      
      }

    }
      return resultCrip
      // console.log(resultCrip)
  },

  decode(offset, myText) {
    var tamDoAlfabeto = 26;
    var codeASC = 65;
    let resultDecrip = "".toUpperCase();

    for (let i = 0; i < myText.length; i++) {
      let codigoCaractere = myText.charCodeAt(i);
      if (codigoCaractere >= 65 && codigoCaractere <= 90) {
        let codigo2 = ((codigoCaractere + codeASC - offset) % tamDoAlfabeto) + codeASC;
        resultDecrip += String.fromCharCode(codigo2);
      } else {
        resultDecrip += String.fromCharCode(codigoCaractere);

      }

    }
    return resultDecrip
  },
}
export default cipher;