//Para generar una interacción cuando el usuario haga algo en la pagina, acciones clave como clicks, llenar un input, llenar un formulario tenemos que "ESCUCHAR" esos eventos, pero ¿cómo lo hacemos?
//dentro del HTML tenemos que agregar atributos clave, segun nuestra necesidad, como  "ONCLICK, ONCHANGE, ONSUBMIT, ENTRE OTROS"
//una vez tenemos el html  vamos al documento de javaScript donde vamos a hacer las variables que contengan y  nos van a permitir seleccionar las etiquetas "H1, P , SPAN, IMG,  ETC" en las que queremos ver los eventos.
//Para crear esos eventos tenemos que hacerlos en funciones y dichas funciones se las vamos a agregar a los parametros que inicialmente le agregamos a la estructura html.

const tituloPrincipal = document.querySelector(`h1`);
const numeroDigitado1 = document.getElementById(`calculo1`);
const numeroDigitado2 = document.querySelector(`#calculo2`); 
const btn = document.querySelector(`#btnCalcular`);
const resultado = document.getElementById(`resultado`);


//para registrar un evento en un elemento podemos hacerlo dandole atributos como "onclick, onchange, entre otras" y llamamos dentro de este atributo una función que crearemos dentro del archivo de JavaScritp asi.

function clickEnBoton (){
    const resultadoCalculo = parseFloat(numeroDigitado1.value) + parseFloat(numeroDigitado2.value) ;  
    //siempr que queramos usar los valores que el usuario ponga en un input usamos "variable + . + value"


    resultado.innerText = `El resultado es: ${resultadoCalculo}`;
  //Si queremos mostrar en pantalla podemos guardar el resultado de la operación en una nueva variable y mandarlo a llamar dentro de otra etiqueta mediante innerText por ejemplo = mensaje + la variable donde se guardo el resultado. TODO DENTRO DE LA MISMA FUNCIÓN QUE LE AGREGAMOS AL EVENTO ONCLICK DEL HTML 
}


