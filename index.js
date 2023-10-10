function encrypt1() {
    const inputText = document.getElementById('inputText1').value;
    const keyword = document.getElementById('keyword1').value;
    const keywordLength = keyword.length;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
      const shift = keyword.charCodeAt(i % keywordLength) - 65;
      const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
      encryptedText += encryptedChar;
    }

    document.getElementById('encryptedText1').textContent = encryptedText;
  }

  function decrypt1() {
    const inputText = document.getElementById('inputText1').value;
    const keyword = document.getElementById('keyword1').value;
    const keywordLength = keyword.length;
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
      const shift = keyword.charCodeAt(i % keywordLength) - 65;
      const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
      decryptedText += decryptedChar;
    }

    document.getElementById('decryptedText1').textContent = decryptedText;
  }