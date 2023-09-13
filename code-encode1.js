
// Функция для шифрования текста методом шифра перестановок (шифр Цезаря)
function encrypt1(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            const isUpperCase = char === char.toUpperCase();
            const charCode = char.charCodeAt(0);
            const offset = isUpperCase ? 65 : 97;
            char = String.fromCharCode(((charCode - offset + shift) % 26) + offset);
        }
        result += char;
    }
    return result;
}

// Функция для расшифровки текста методом шифра перестановок (шифр Цезаря)
function decrypt1(text, shift) {
    return encrypt1(text, 26 - shift); // Дешифровка - это шифрование со сдвигом в обратную сторону
}

document.addEventListener('DOMContentLoaded', function () {
    const cryptoForm = document.getElementById('cryptoForm');
    const output1 = document.getElementById('output1');

    cryptoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const message1 = document.getElementById('message1').value;
        const action = document.getElementById('action').value;
        const shiftAmount = parseInt(document.getElementById('shiftAmount').value, 10);

        let result = '';

        if (action === 'encrypt1') {
            result = encrypt1(message1, shiftAmount);
        } else if (action === 'decrypt1') {
            result = decrypt1(message1, shiftAmount);
        }

        output1.textContent = result;
    });
});