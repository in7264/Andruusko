// Функция для зашифровки текста
function encrypt3() {
    var inputText = document.getElementById("inputText").value;
    var key = prompt("Введите ключ (число перестановок):");
    var encryptedText = "";
    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i] !== " ") {
            var charCode = inputText.charCodeAt(i);
            charCode += parseInt(key);
            encryptedText += String.fromCharCode(charCode);
        } else {
            encryptedText += " ";
        }
    }
    document.getElementById("outputText").textContent = encryptedText;
}

// Функция для дешифровки текста
function decrypt3() {
    var inputText = document.getElementById("inputText").value;
    var key = prompt("Введите ключ (число перестановок):");
    var decryptedText = "";
    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i] !== " ") {
            var charCode = inputText.charCodeAt(i);
            charCode -= parseInt(key);
            decryptedText += String.fromCharCode(charCode);
        } else {
            decryptedText += " ";
        }
    }
    document.getElementById("outputText").textContent = decryptedText;
}