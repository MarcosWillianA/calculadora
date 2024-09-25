const displayCalculadora = document.getElementById('displayCalculadora');
let valorNumerico = displayCalculadora.value;

function calcular (operacao, dado) {
    
    if (operacao === 'operacao') {
        if (dado === 'cancel') {
            valorNumerico.slice(0, -1);
        }

        if (dado === 'clear') {
            displayCalculadora.value = '';
        }

        if (dado === '+' || dado === '-' || dado === '*' || dado === '/' || dado === '.') {
            displayCalculadora.value += dado;
        }

        if (dado === '==') {
            resultado = eval(displayCalculadora.value);
            displayCalculadora.value = resultado;
        }
    } else if (operacao === 'valor') {
        displayCalculadora.value += dado;
    }
}
