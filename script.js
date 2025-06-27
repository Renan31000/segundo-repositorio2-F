const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostrarPalavraChave);

function mostrarPalavraChave() {
    //alert("Fui Clicado!");
    const texto = Document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');

    campoResultado.textContent = texto;
}