const display = document.getElementById('display');

function valor(valor) {
    display.value += valor;
    numero = display.value;

    if (numero.includes('.')) {
        
    } else {
        console.log('Não tem ponto');
    }
}

//console.log(valor(55.2))
console.log(valor())