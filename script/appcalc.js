const display = document.getElementById('display');
let numeroAnterior = null;
let operador = null;

let memoria = display.value;

// Botão dos números
function digito (n) {    

    if (n === ',' && display.value.includes(',')) {
        return;
    } 

    display.value += n; 

    // Limite de caracteres: 15
    if (display.value.length > 15) {
        display.value = display.value.substring(0, 15);
        console.log('Não pode acrescentar mais de 15 caracteres!')
    }

    return display.value;
}

let numeroMostrado = display.value;

// Limpeza e reset

function limpar () {
    display.value = '';
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

// Operações matemáticas (AGORA VEM O DESAFIO)

function operacao (sinal) {

    memoria = display.value; 


    switch (sinal) {
        case '+':
        memoria += sinal;
        display.value = '';
        display.placeholder = memoria;
        break;

        case '-': 
        memoria += sinal;
        display.value = '';
        display.placeholder = memoria;
        break; 

        case '*':
        memoria += sinal;
        display.value = '';
        display.placeholder = memoria;
        break;

        case '/':
        memoria += sinal;
        display.value = '';
        display.placeholder = memoria;
        break;
    }  

    console.log(memoria);
}

