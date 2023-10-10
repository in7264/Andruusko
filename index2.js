// Мапа для шифрування і розшифрування
const substitutionMap = {
    'а': 'я', 'б': 'а', 'в': 'б', 'г': 'в', 'д': 'г', 'е': 'д',
    'є': 'е', 'ж': 'є', 'з': 'ж', 'и': 'з', 'і': 'и', 'ї': 'і',
    'й': 'ї', 'к': 'й', 'л': 'к', 'м': 'л', 'н': 'м', 'о': 'н',
    'п': 'о', 'р': 'п', 'с': 'р', 'т': 'с', 'у': 'т', 'ф': 'у',
    'х': 'ф', 'ц': 'х', 'ч': 'ц', 'ш': 'ч', 'щ': 'ш', 'ь': 'щ',
    'ю': 'ь', 'я': 'ю', ' ': ' '
};

// Функція для шифрування тексту
function encrypt() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        const substitutedChar = substitutionMap[char] || char;
        encryptedText += substitutedChar;
    }

    document.getElementById('outputText').value = encryptedText;
}

// Функція для розшифрування тексту
function decrypt() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        const reversedSubstitutionMap = reverseMap(substitutionMap);
        const substitutedChar = reversedSubstitutionMap[char] || char;
        decryptedText += substitutedChar;
    }

    document.getElementById('outputText').value = decryptedText;
}

// Функція для створення оберненої мапи
function reverseMap(map) {
    const reversedMap = {};
    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            reversedMap[map[key]] = key;
        }
    }
    return reversedMap;
}
