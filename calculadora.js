function calcularComissao() {
    var media = parseFloat(document.getElementById('media').value);
    var volume = parseFloat(document.getElementById('volume').value);

    if (volume < 5 || volume > 10) {
        document.getElementById('resultado').textContent = 'O volume deve ser de no mínimo 5 e no máxímo 10 anos, tente novamente.';
    } else {
        var taxaPorVolume = volume * 0.06;
        var comissao = media * taxaPorVolume * 0.2;

        document.getElementById('resultado').textContent = 'Comissão resultante: ' + comissao;
    }
}