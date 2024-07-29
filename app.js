let numberSecret = 0;
let attempts = 1;
let arrayHistorySecretNumbers = [];
let numberMax = 10;

function asignarTextoElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento);
    elementHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numberUser = parseInt(document.getElementById('ValueUser').value);

    console.log(numberUser);

    console.log(numberUser === numberSecret);

    if (numberUser === numberSecret){
        asignarTextoElemento('p', `Acertaste el Número en ${attempts} ${(attempts === 1) ? `vez!` : `veces!` }` );

        document.querySelector('#reiniciar').removeAttribute('disabled');

    } else {
        if (numberUser>numberSecret){
            asignarTextoElemento('p', 'El Número Secreto es Menor!' );
        } else{
            asignarTextoElemento('p', 'El Número Secreto es Mayor!' );
        }
        attempts++;
        cleanBox();
    }
    return;
}

function cleanBox(){
    document.querySelector('#ValueUser').value = '';;
}

function generateSecretNumber() {
    let numeroGenerado = Math.floor(Math.random()*numberMax)+1;

    console.log(numeroGenerado);
    console.log(arrayHistorySecretNumbers);

    if (arrayHistorySecretNumbers.length == numberMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        } else {
            if(arrayHistorySecretNumbers.includes(numeroGenerado)){
                return generateSecretNumber();
        } else{
            arrayHistorySecretNumbers.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function conditions(){
    asignarTextoElemento('h1', 'Juego del Número Secreto 2.0');
    asignarTextoElemento('p', `Indica un Número del 1 al ${numberMax}`);
    numberSecret = generateSecretNumber();

    attempts = 1;
}

function resetGame(){
    //limpiar caja
    cleanBox();

    //indicar mensaje del rango de los números
    //Generar el npumero aleatorio
    //Inicializar el número intentos 
    conditions();

    //Deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    return;
}

conditions();