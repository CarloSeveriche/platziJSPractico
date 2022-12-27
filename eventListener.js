//agregando escuchadores de eventos directamente desde el Java Scrip y de esta manera tenermos mas limpio nuestro html
//esto lo hacemos trabajando con las variables que almacenan las etiquetas y las funciones que queremos que se ejecuten una vez ocurre un evento.



const tituloPrimero = document.querySelector(`#titulo1`);
const valor1 = document.getElementById(`calculo11`);
const valor2 = document.getElementById(`calculo12`);
const btnCalculo = document.querySelector(`#btnCalcular`);
const resultadoCalculo = document.querySelector(`#resultado2`);

//EN EL CASO QUUE TENGAMOS FORMULARIOS TAMBIEN CREAMOS UNA VARIABLE PARA LA ETIQUETA DE FORM
const form = document.getElementById(`form`);
//Y YA NO CREADEMOS UN ADDEVENT LISTENER A NUESTRO BOTON DE FORMULARIO SINO A NUESTRO FORMULARIO COMO TAL 
form.addEventListener(`submit`, btnResultado)

//seleccionamos la variable de la etiqueta de html que la cual queremos registrar el evento para que se ejecute la función asi "nombre variable + . + addEventListener( `EL EVENTO QUE QUEREMOS REGISTRAR` , NOMBRE DE LA FUNCIÓN QUE QUEREMOS EJECUTAR)"
//NOTA: ESTO YA NO SE HARIA EN CASO DE MANEJAR FORMULARIOS
// btnCalculo.addEventListener( `click` , btnResultado);

//NO TENEMOS QUE AGREGAR LOS () AL FINAL DE LA FUNCIÓN pues este .addEventListener lo que hace es mandar a llamar a la función primero y cuando  ocurra el evento el la ejecuta y no antes.

function btnResultado(eventoListener){
    console.log({eventoListener});
    eventoListener.preventDefault();
    const resultadoFinal = parseFloat(valor1.value) + parseFloat(valor2.value);
    resultadoCalculo.innerText = `El resultado es: ${resultadoFinal}`;
}

