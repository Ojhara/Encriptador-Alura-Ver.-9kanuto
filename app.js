  function encrypt() {
    var plaintext = document.getElementById('plaintext').value;
    var ciphertext = '';

    for (var i = 0; i < plaintext.length; i++) {
      var char = plaintext.charAt(i);
      switch(char) {
        case 'e':
          ciphertext += 'enter';
          break;
        case 'i':
          ciphertext += 'imes';
          break;
        case 'a':
          ciphertext += 'ai';
          break;
        case 'o':
          ciphertext += 'ober';
          break;
        case 'u':
          ciphertext += 'ufat';
          break;
        default:
          ciphertext += char;
      }
    }

    document.getElementById('ciphertext').value = ciphertext;
  }

  // Función para desencriptar el texto
  function decrypt() {
    var ciphertext = document.getElementById('ciphertext').value;
    var decryptedtext = '';

    // Reemplazar las cadenas encriptadas por las letras originales
    decryptedtext = ciphertext.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');

    document.getElementById('decryptedtext').value = decryptedtext;
  }
