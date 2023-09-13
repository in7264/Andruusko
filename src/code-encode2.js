// Здесь вы можете задать вашу собственную таблицу замены
const substitutionTable = {
    'a': 'z',
    'b': 'y',
    'c': 'x',
    'd': 'w',
    'e': 'v',
    'f': 'u',
    'g': 't',
    'h': 's',
    'i': 'r',
    'j': 'q',
    'k': 'p',
    'l': 'o',
    'm': 'n',
    'n': 'm',
    'o': 'l',
    'p': 'k',
    'q': 'j',
    'r': 'i',
    's': 'h',
    't': 'g',
    'u': 'f',
    'v': 'e',
    'w': 'd',
    'x': 'c',
    'y': 'b',
    'z': 'a',
};

function encrypt2() {
    const inputMessage = document.getElementById('message2').value.toLowerCase();
    let encryptedMessage = '';

    for (let i = 0; i < inputMessage.length; i++) {
        const currentChar = inputMessage[i];
        const substitutionChar = substitutionTable[currentChar] || currentChar;
        encryptedMessage += substitutionChar;
    }

    document.getElementById('output2').textContent = encryptedMessage;
}

function decrypt2() {
    const inputMessage = document.getElementById('message2').value.toLowerCase();
    let decryptedMessage = '';

    // Создаем обратную таблицу замены
    const reverseSubstitutionTable = {};
    for (const key in substitutionTable) {
        const value = substitutionTable[key];
        reverseSubstitutionTable[value] = key;
    }

    for (let i = 0; i < inputMessage.length; i++) {
        const currentChar = inputMessage[i];
        const reverseSubstitutionChar = reverseSubstitutionTable[currentChar] || currentChar;
        decryptedMessage += reverseSubstitutionChar;
    }

    document.getElementById('output2').textContent = decryptedMessage;
}