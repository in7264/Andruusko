function encrypt4() {
    const inputText4 = document.getElementById("inputText4").value;
    const railCount = 3; // Количество рельсов (можете изменить)
    const encryptedText = railFenceEncrypt(inputText4, railCount);
    document.getElementById("outputText4").textContent = encryptedText;
  }

  function decrypt4() {
    const inputText4 = document.getElementById("inputText4").value;
    const railCount = 3; // Количество рельсов (должно совпадать с количеством рельсов при шифровании)
    const decryptedText = railFenceDecrypt(inputText4, railCount);
    document.getElementById("outputText4").textContent = decryptedText;
  }

  function railFenceEncrypt(text, railCount) {
    const rails = new Array(railCount);
    for (let i = 0; i < railCount; i++) {
      rails[i] = [];
    }

    let rail = 0;
    let direction = 1;

    for (let char of text) {
      rails[rail].push(char);

      if (rail === 0) {
        direction = 1;
      } else if (rail === railCount - 1) {
        direction = -1;
      }

      rail += direction;
    }

    let encryptedText = "";
    for (let i = 0; i < railCount; i++) {
      encryptedText += rails[i].join("");
    }

    return encryptedText;
  }

  function railFenceDecrypt(text, railCount) {
    const rails = new Array(railCount);
    for (let i = 0; i < railCount; i++) {
      rails[i] = [];
    }

    const railLengths = new Array(railCount).fill(0);
    let rail = 0;
    let direction = 1;

    for (let i = 0; i < text.length; i++) {
      railLengths[rail]++;
      if (rail === 0) {
        direction = 1;
      } else if (rail === railCount - 1) {
        direction = -1;
      }
      rail += direction;
    }

    let currentIndex = 0;
    for (let i = 0; i < railCount; i++) {
      for (let j = 0; j < railLengths[i]; j++) {
        rails[i].push(text[currentIndex]);
        currentIndex++;
      }
    }

    rail = 0;
    direction = 1;
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) {
      decryptedText += rails[rail].shift();

      if (rail === 0) {
        direction = 1;
      } else if (rail === railCount - 1) {
        direction = -1;
      }

      rail += direction;
    }

    return decryptedText;
  }