let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosGenerados = [];
let numeroMaximo = 10;



function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    // En caso de haber jugado ya todos los numeros posibles
    if(listaDeNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento('span', 'Ya se acabaron todos los numeros posibles');
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
        limpiarCaja();
        
        }else{        
            
            if(numeroDeUsuario === numeroSecreto){
                asignarTextoElemento('span', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
                
            }else{
                
                if(numeroDeUsuario > numeroSecreto){
                    asignarTextoElemento('span', `El numero secreto es menor`) ;
                    
                } else{
                    asignarTextoElemento('span', `El numero secreto es mayor`) ;
                    
                }
            }
            intentos ++; 
            limpiarCaja();
        };
    return;
    
}

function generarNumeroAleatorio() {
    let numeroSorteado =  Math.floor(Math.random()*numeroMaximo)+1;
    
    
    if (listaDeNumerosGenerados.includes(numeroSorteado)){
        return generarNumeroAleatorio();
    } else{
        console.log(numeroSorteado);
        console.log(listaDeNumerosGenerados);
        listaDeNumerosGenerados.push(numeroSorteado);
        return numeroSorteado;
    }

}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
    
};

function juegoNuevo() {
    // location.reload();
    limpiarCaja();
    CondicionesIniciales();
    asignarTextoElemento('span', 'Indica un numero del 1 al 10')
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    
    
}

function CondicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento('span', `Indica un numero del 1 al  ${numeroMaximo}`)
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
       
}
CondicionesIniciales()

