const display = document.getElementById('display');

function digito (n) {
    
    if (n === ',' && display.value.includes(',')) {
        return;
    } 

    display.value += n; 

    // Limite de caracteres: 15
    if (display.value.length > 15) {
        display.value = display.value.substring(0, 15);
        return;
    }
}

function operacao (sinal) {
    if (sinal === display.value.at(-1)) {
        return;
    }

    display.value += sinal;
}

function limpar () {
    display.value = '';
}

function apagar () {
    display.value = display.value.slice(0, -1);
}

function resultado () {
    if (display.value.includes('/') && display.value.split('/').pop() === '0') {
        display.value = 'Não é possível dividir por zero'; // Limpa o display
        return;
    }

    display.value = eval(display.value);
}













/*
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
    memoria = ''
    display.value = 0;
}

function apagar() {
    display.value = display.value.slice(0, -1);
    memoria = memoria.slice(0, -1);
}

// Operações matemáticas (AGORA VEM O DESAFIO)

function operacao (sinal) {

    memoria += display.value;
    memoriaDisplay = display.value   

    switch (sinal) {
        case '+':
        memoria += sinal;
        display.value = '';
        display.placeholder = memoriaDisplay;
        break;

        case '-': 
        memoria += sinal;
        display.value = '';
        display.placeholder = memoriaDisplay;
        break; 

        case '*':
        memoria += sinal;
        display.value = '';
        display.placeholder = memoriaDisplay;
        break;

        case '/':
        memoria += sinal;
        display.value = '';
        display.placeholder = memoriaDisplay;
        break;
    }  

    console.log(memoria);
    return memoria;

}

function resultado (igual) {
    memoriaDisplay = display.value;
    console.log(memoria);
    memoria += display.value;
    console.log(`Testando com a string concatenada com os sinais ${memoria}`)
    //memoria += igual; 
    //console.log(`Concatenando o igual ${memoria}`);
    let resultado = eval(memoria);
    display.value = resultado;
    return resultado;
    

}

*/ 
