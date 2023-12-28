function calcularComissao() {
    var media = document.getElementById('media').value;
    var volume = document.getElementById('volume').value;

    if (media == "" || volume == "") {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
    }

    if (volume < 5 || volume > 10) {
        alert("O volume deve ser de no mínimo 5 e no máxímo 10 anos, tente novamente.");
        return;
    }

    media = parseFloat(media);
    volume = parseFloat(volume);
    var taxaPorVolume = volume * 0.06;
    var comissao = media * taxaPorVolume * 0.2;

    document.getElementById('resultado').textContent = 'Comissão resultante: R$ ' + comissao.toLocaleString('pt-BR');
}