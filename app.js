const inputTexto1 = document.querySelector(".input-text");
const mensagem = document.querySelector(".input-decod");

function btnCodificar() {
    const textoCodificado = codificar(inputTexto1.value);
    mensagem.value = textoCodificado;
}

function codificar(stringCodificar) {
    let codigoDesafio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCodificar = stringCodificar.toLowerCase();

    for (let i = 0; i < codigoDesafio.length; i++) {
        if (stringCodificar.includes(codigoDesafio[i][0])) {
            stringCodificar = stringCodificar.replaceAll(codigoDesafio[i][0], codigoDesafio[i][1]);
        }
    }
    return stringCodificar;
}

function btnDecodificar() {
    const textoDecodificado = decodificar(inputTexto1.value);
    mensagem.value = textoDecodificado;
}

function decodificar(stringDecodificar) {
    let codigoDesafio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecodificar = stringDecodificar.toLowerCase();

    for (let i = 0; i < codigoDesafio.length; i++) {
        if (stringDecodificar.includes(codigoDesafio[i][1])) {
            stringDecodificar = stringDecodificar.replaceAll(codigoDesafio[i][1], codigoDesafio[i][0]);
        }
    }
    return stringDecodificar;
}

function copy() {
    let textoCopiar = document.querySelector(".input-decod");
    textoCopiar.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência");
}