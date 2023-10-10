function encrypt2() {
    const originalText = document.getElementById('originalText2').value;
    const keyword = document.getElementById('keyword2').value;
    const encryptedText = encryptText(originalText, keyword);
    document.getElementById('encryptedText2').textContent = encryptedText;
  }

  function decrypt2() {
    const encryptedText = document.getElementById('encryptedText2').textContent;
    const keyword = document.getElementById('keyword2').value;
    const decryptedText = decryptText(encryptedText, keyword);
    document.getElementById('decryptedText2').textContent = decryptedText;
  }

  function encryptText(text, keyword) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const keywordCharCode = keyword.charCodeAt(i % keyword.length);
      const encryptedCharCode = charCode + keywordCharCode;
      encryptedText += String.fromCharCode(encryptedCharCode);
    }
    return encryptedText;
  }

  function decryptText(text, keyword) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const keywordCharCode = keyword.charCodeAt(i % keyword.length);
      const decryptedCharCode = charCode - keywordCharCode;
      decryptedText += String.fromCharCode(decryptedCharCode);
    }
    return decryptedText;
  }