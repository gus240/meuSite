function calcular() {
    var numero1 = document.getElementsByClassName('input1').value;
    var numero2 = document.getElementsByClassName('input2').value;

    var soma = numero1 + numero2;
    var multiplicacao = numero1 * numero2;
    var subtracao = numero1 - numero2;
    var divisao = numero1 / numero2;


    document.getElementById('soma').innerHTML = soma;
    document.getElementById('multiplicacao').innerHTML = multiplicacao;
    document.getElementById('subtracao').innerHTML = subtracao
    document.getElementById('divisao').innerHTML = divisao
}