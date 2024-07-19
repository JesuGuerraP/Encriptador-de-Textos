function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const noMessageDiv = document.getElementById('noMessageDiv');
    const copyButton = document.querySelector('.copy');

    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
        return;
    }

    // Encriptar el texto
    let textoEncriptado = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Actualizar el textarea de la derecha con el texto encriptado
    outputText.value = textoEncriptado;

    // Mostrar el textarea y el botón de copiar, ocultar el mensaje de "No message"
    outputText.style.display = 'block';
    copyButton.style.display = 'block';
    noMessageDiv.style.display = 'none';
}

function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const noMessageDiv = document.getElementById('noMessageDiv');
    const copyButton = document.querySelector('.copy');

    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
        return;
    }

    // Desencriptar el texto
    let textoDesencriptado = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Actualizar el textarea de la derecha con el texto desencriptado
    outputText.value = textoDesencriptado;

    // Mostrar el textarea y el botón de copiar, ocultar el mensaje de "No message"
    outputText.style.display = 'block';
    copyButton.style.display = 'block';
    noMessageDiv.style.display = 'none';
}

function copiarTexto() {
    const outputText = document.getElementById('outputText');

    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand('copy');

    alert('Texto copiado: ' + outputText.value);
}
