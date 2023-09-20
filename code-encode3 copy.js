function encrypt3() { 
    var inputText = document.getElementById("inputText").value; 
    var key = parseInt(document.getElementById("inputkey").value); 
    var encryptedText = ""; 
 
    // Уберите пробелы из входного текста 
    inputText = inputText.replace(/\s/g, ''); 
 
    // Вычислите длину текста 
    var textLength = inputText.length; 
 
    // Вычислите количество столбцов в матрице 
    var numColumns = Math.ceil(textLength / key); 
 
    // Создайте матрицу для зашифрованных символов 
    var matrix = new Array(numColumns); 
    for (var i = 0; i < numColumns; i++) { 
        matrix[i] = []; 
    } 
 
    // Заполните матрицу символами из входного текста 
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
 
    // Считайте символы из матрицы в порядке столбцов 
    for (var row = 0; row < key; row++) { 
        for (var col = 0; col < numColumns; col++) { 
            encryptedText += matrix[col][row]; 
        } 
    } 
 
    document.getElementById("outputText3").textContent = encryptedText; 
} 
 
// Функция для дешифровки текста с использованием шифра перестановки 
function decrypt3() { 
    var inputText = document.getElementById("inputText").value; 
    var key = parseInt(document.getElementById("inputkey").value); 
    var decryptedText = ""; 
 
    // Вычислите длину текста 
    var textLength = inputText.length; 
 
    // Вычислите количество столбцов в матрице 
    var numColumns = Math.ceil(textLength / key); 
 
    // Создайте матрицу для расшифрованных символов 
    var matrix = new Array(numColumns); 
    for (var i = 0; i < numColumns; i++) { 
        matrix[i] = []; 
    } 
 
    // Заполните матрицу символами из входного текста 
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
 
    // Считайте символы из матрицы в порядке строк 
    for (var row = 0; row < key; row++) { 
        for (var col = 0; col < numColumns; col++) { 
            decryptedText += matrix[col][row]; 
        } 
    } 
 
    document.getElementById("outputText3").textContent = decryptedText; 
}