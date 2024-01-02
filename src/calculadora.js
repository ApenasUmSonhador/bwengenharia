function calcularComissao() {
    var media = document.getElementById('media').value;
    var prazo = document.getElementById('prazo').value;

    if (media == "" || prazo == "") {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
    }

    if (prazo != 5 && prazo != 7 && prazo != 10) {
        alert("O prazo deve ser de 5, 7 ou 10 anos, tente novamente.");
        return;
    }

    media = parseFloat(media);
    prazo = parseFloat(prazo);
    var taxaPorPrazo = prazo * 0.06;
    var comissao = media * taxaPorPrazo * 0.2;

    document.getElementById('resultado').textContent = 'Comissão aproximada: R$ ' + comissao.toLocaleString('pt-BR');
}