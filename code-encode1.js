// Функція для шифрування тексту методом шифру перестановок (шифр Цезаря)
function encrypt1(text, shift) {
    let result = ''; // Ініціалізуємо змінну для зберігання зашифрованого тексту
    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Отримуємо поточний символ тексту
        if (char.match(/[a-zA-Z]/)) { // Перевіряємо, чи символ є літерою англійського алфавіту
            const isUpperCase = char === char.toUpperCase(); // Визначаємо, чи символ є великою літерою
            const charCode = char.charCodeAt(0); // Отримуємо числовий код символу
            const offset = isUpperCase ? 65 : 97; // Визначаємо зсув для великих або малих літер
            char = String.fromCharCode(((charCode - offset + shift) % 26) + offset); // Зашифровуємо символ і додаємо його до результату
        }
        result += char; // Додаємо зашифрований символ до результату
    }
    return result; // Повертаємо зашифрований текст
}

// Функція для розшифрування тексту методом шифру перестановок (шифр Цезаря)
function decrypt1(text, shift) {
    return encrypt1(text, 26 - shift); // Розшифровуємо текст шляхом оберненого зсуву
}

document.addEventListener('DOMContentLoaded', function () {
    const cryptoForm = document.getElementById('cryptoForm'); // Отримуємо форму з шифрувальними опціями
    const output1 = document.getElementById('output1'); // Отримуємо елемент для відображення результату

    cryptoForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Відміняємо стандартну подію відправки форми

        const message1 = document.getElementById('message1').value; // Отримуємо введений текст
        const action = document.getElementById('action').value; // Отримуємо вибрану дію (шифрування або розшифрування)
        const shiftAmount = parseInt(document.getElementById('shiftAmount').value, 10); // Отримуємо кількість зсуву

        let result = '';

        if (action === 'encrypt1') { // Якщо вибрана дія - шифрування
            result = encrypt1(message1, shiftAmount); // Викликаємо функцію шифрування
        } else if (action === 'decrypt1') { // Якщо вибрана дія - розшифрування
            result = decrypt1(message1, shiftAmount); // Викликаємо функцію розшифрування
        }

        output1.textContent = result; // Відображаємо результат у вікні
    });
});