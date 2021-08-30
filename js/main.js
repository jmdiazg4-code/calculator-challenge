var accion = document.getElementsByClassName("botones");
const caja = document.getElementById('caja')
const etiqueta = document.getElementById('etiqueta')
let numeros = []


console.log(accion);
for (var i = 0; i < accion.length; i++) {
    accion[i].addEventListener('click', presionando)
}


function presionando(){
    var tecla = this.value;
    console.log(tecla)
    var convertido =parseInt(tecla, 10)
    var hexadecimal = parseInt(tecla, 16)
    var octal = parseInt(tecla, 8)
    if(hexadecimal===222){
        console.log('BORRAR')
        borrar()
        
    }else if(tecla==='.'){
        escribirNumeros(tecla)
    }
    else if(tecla ==='RESET'){
        caja.value =''
        numeros=[]
        etiqueta.textContent=''
    }
    else if(isNaN(convertido)){
        console.log('OPERAR')
        operar(tecla)
    }else {
        console.log('si es numero')
        escribirNumeros(tecla)
    }
}

function escribirNumeros(numero){
    caja.value += numero
}

function borrar(){
    var textoActual = caja.value
    var textoNuevo = textoActual.slice(0,-1)
    caja.value = textoNuevo
}

function operar(signo){
    etiqueta.style.color = 'white'
    var primerOperando = etiqueta.textContent
    if(signo !== '='){
    numeros.push(caja.value)
    caja.value = ''
    etiqueta.textContent = signo
    }
    else if(caja.value!=='' && etiqueta.textContent != '') {
        numeros.push(caja.value)
        hacerOperacion(primerOperando) 
    }
}

function hacerOperacion(signo) {
    
    if(numeros[0].includes('.') || numeros[1].includes('.')){
        console.log('hacer operacion con punto')
        var first =parseFloat(numeros[0], 10);
        var second =parseFloat(numeros[1], 10);
    }else{
        var first =parseInt(numeros[0], 10);
        var second =parseInt(numeros[1], 10);
    }
    

    console.log("expresion final ", first + signo + second)
    if(signo === '➕'){
        var suma= first+second
        caja.value = suma;
        etiqueta.textContent=''
        numeros=[]
        
    }
    if(signo === '➖'){
        var resta= first-second
        caja.value = resta;
        etiqueta.textContent=''
        numeros=[]
    }
    if(signo === 'X'){
        var multiplicacion = first*second
        caja.value = multiplicacion
        etiqueta.textContent=''
        numeros=[]
    }
    if(signo === '➗'){
        var division = first/second
        caja.value = division
        etiqueta.textContent=''
        numeros=[]
    }
}
    