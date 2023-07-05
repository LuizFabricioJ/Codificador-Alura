const criptButton = document.getElementById('cript');
const descriptButton = document.getElementById('descript');
const copiarButton = document.getElementById('btnCopiar');
const textInput = document.getElementById('text');
const resultContainer = document.getElementById('Texto');

text.focus();

document.getElementById("cript").addEventListener("click", function criptText(){
    let text = textInput.value;
   if (text == "") {
        return;
    } else if (!/^[a-z]/.test(text)) {
       alert("Apenas letras minúsculas e sem acento.");
       return;
    }
    text = text.replaceAll('e', 'enter');
    text = text.replaceAll('i', 'imes');
    text = text.replaceAll('a', 'ai');
    text = text.replaceAll('o', 'ober');
    text = text.replaceAll('u', 'ufat');
    resultContainer.textContent = text;
    copiarButton.classList.remove("hide");
    document.querySelector('.info-result').textContent = "";
});

document.getElementById("descript").addEventListener("click", function descriptText(){
    let text = textInput.value.toLowerCase();
    if (text == "") {
        return;
    }
    text = text.replaceAll('enter', 'e');
    text = text.replaceAll('imes', 'i');
    text = text.replaceAll('ai', 'a');
    text = text.replaceAll('ober', 'o');
    text = text.replaceAll('ufat', 'u');
    resultContainer.textContent = text;
    copiarButton.classList.remove("hide");
    document.querySelector('.info-result').textContent = "";
})

document.getElementById("btnCopiar").addEventListener("click", function copiarText(){
        let textToCopiar = resultContainer.textContent;
        navigator.clipboard.writeText(textToCopiar)
          .then(() => alert("Seu texto foi copiado"))
          .catch(() => alert("Falha ao copiar o texto"));

          text.value = "";
          text.focus();
})

copiarButton.classList.add("hide");


document.getElementById("clean").addEventListener("click", function cleanText() {
        location.reload();
})