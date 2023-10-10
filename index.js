function encrypt1() {
    const inputText = document.getElementById('inputText1').value;
    const shiftAmount = parseInt(document.getElementById('shiftAmount1').value);
    const encryptedText = skytalaEncrypt(inputText, shiftAmount);
    document.getElementById('outputText1').value = encryptedText;
}

function decrypt1() {
    const inputText = document.getElementById('inputText1').value;
    const shiftAmount = parseInt(document.getElementById('shiftAmount1').value);
    const decryptedText = skytalaDecrypt(inputText, shiftAmount);
    document.getElementById('outputText1').value = decryptedText;
}

function skytalaEncrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            result += ' ';
        } else {
            const code = text.charCodeAt(i);
            const encryptedCode = code + shift;
            result += String.fromCharCode(encryptedCode);
        }
    }
    return result;
}

function skytalaDecrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            result += ' ';
        } else {
            const code = text.charCodeAt(i);
            const decryptedCode = code - shift;
            result += String.fromCharCode(decryptedCode);
        }
    }
    return result;
}