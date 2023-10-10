function encrypt() {
    const keyword = document.getElementById("keyword").value;
    const message = document.getElementById("message").value;
    const encryptedMessage = myszkowskiEncrypt(message, keyword);
    document.getElementById("result").textContent = encryptedMessage;
  }

  function decrypt() {
    const keyword = document.getElementById("keyword").value;
    const message = document.getElementById("message").value;
    const decryptedMessage = myszkowskiDecrypt(message, keyword);
    document.getElementById("result").textContent = decryptedMessage;
  }

  function myszkowskiEncrypt(message, keyword) {
    const sortedKeyword = [...keyword].sort().join("");
    const columnOrder = Array.from({ length: keyword.length }, (_, i) => sortedKeyword.indexOf(keyword[i]));
    const rowCount = Math.ceil(message.length / keyword.length);
    const matrix = Array.from({ length: rowCount }, (_, i) => message.substr(i * keyword.length, keyword.length).split(''));
    let result = "";

    for (let i = 0; i < keyword.length; i++) {
      const columnIndex = columnOrder.indexOf(i);
      for (let j = 0; j < rowCount; j++) {
        if (matrix[j][columnIndex]) {
          result += matrix[j][columnIndex];
          matrix[j][columnIndex] = "";
        }
      }
    }

    return result;
  }

  function myszkowskiDecrypt(message, keyword) {
    const sortedKeyword = [...keyword].sort().join("");
    const columnOrder = Array.from({ length: keyword.length }, (_, i) => sortedKeyword.indexOf(keyword[i]));
    const rowCount = Math.ceil(message.length / keyword.length);
    const matrix = Array.from({ length: rowCount }, (_, i) => new Array(keyword.length));
    let messageIndex = 0;

    for (let i = 0; i < keyword.length; i++) {
      const columnIndex = columnOrder.indexOf(i);
      for (let j = 0; j < rowCount; j++) {
        matrix[j][columnIndex] = message[messageIndex++];
      }
    }

    let result = "";
    for (let i = 0; i < rowCount; i++) {
      result += matrix[i].join('');
    }

    return result;
  }