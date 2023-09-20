// Функція для шифрування методом шифру перестановки по стовпцях
function encrypt3() {
    var inputText = document.getElementById("inputText").value; // Отримуємо вхідний текст
    var key = parseInt(document.getElementById("inputkey").value); // Отримуємо ключ для шифрування
    var encryptedText = ""; // Змінна для збереження зашифрованого тексту

    // Видаляємо пробіли з вхідного тексту
    inputText = inputText.replace(/\s/g, '');

    // Визначаємо довжину тексту
    var textLength = inputText.length;

    // Визначаємо кількість стовпців у матриці
    var numColumns = Math.ceil(textLength / key);

    // Створюємо матрицю для зашифрованих символів
    var matrix = new Array(numColumns);
    for (var i = 0; i < numColumns; i++) {
        matrix[i] = [];
    }

    // Заповнюємо матрицю символами з вхідного тексту
    var currentIndex = 0;
    for (var col = 0; col < numColumns; col++) {
        for (var row = 0; row < key; row++) {
            if (currentIndex < textLength) {
                matrix[col][row] = inputText[currentIndex];
                currentIndex++;
            } else {
                matrix[col][row] = "";
            }
        }
    }

    // Зчитуємо символи з матриці у порядку стовпців
    for (var row = 0; row < key; row++) {
        for (var col = 0; col < numColumns; col++) {
            encryptedText += matrix[col][row];
        }
    }

    document.getElementById("outputText3").textContent = encryptedText; // Виводимо зашифрований текст
}

// Функція для розшифрування методом шифру перестановки по стовпцях
function decrypt3() {
    var inputText = document.getElementById("inputText").value; // Отримуємо вхідний текст
    var key = parseInt(document.getElementById("inputkey").value); // Отримуємо ключ для розшифрування
    var decryptedText = ""; // Змінна для збереження розшифрованого тексту

    // Видаляємо пробіли з вхідного тексту
    inputText = inputText.replace(/\s/g, '');

    // Визначаємо довжину тексту
    var textLength = inputText.length;

    // Визначаємо кількість стовпців у матриці
    var numColumns = Math.ceil(textLength / key);

    // Створюємо матрицю для розшифрованих символів
    var matrix = new Array(key);
    for (var i = 0; i < key; i++) {
        matrix[i] = [];
    }

    // Заповнюємо матрицю символами з вхідного тексту
    var currentIndex = 0;
    for (var row = 0; row < key; row++) {
        for (var col = 0; col < numColumns; col++) {
            if (currentIndex < textLength) {
                matrix[row][col] = inputText[currentIndex];
                currentIndex++;
            } else {
                matrix[row][col] = "";
            }
        }
    }

    // Зчитуємо символи з матриці у порядку стовпців
    for (var col = 0; col < numColumns; col++) {
        for (var row = 0; row < key; row++) {
            decryptedText += matrix[row][col];
        }
    }

    document.getElementById("outputText3").textContent = decryptedText; // Виводимо розшифрований текст
}
