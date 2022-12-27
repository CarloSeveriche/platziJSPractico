//cuando tenemos una lista muy extensa de opciones para el usuario podemos poner todas esas opciones en un arreglo de objetos.

//1- definimos el objeto con su nombre y adentro  los nombres de los elementos  (key) y sus valores.
const tiposDeSuscripciones={
    free: " Solo cursos gratis",
    basic: "casi todos los cursos durante un mes",
    expert: "Casi todos los cursos durante un año",
    expertDuo: "tu y alguien mas pueden tomar todos los cursos por un año",
};

//podemos acceder a los elementos del objeto cuando llamamos el objeto + . + nombre 
tiposDeSuscripciones.free
tiposDeSuscripciones.basic
//tambien podemos acceder usando 
//nombre del objeto + [`nombre del elemento`]
tiposDeSuscripciones[`free`]

//podemos darle el valor de uno de los elementos del objeto mediante su nombre a una nueva variable. 
//Declaramos la variable = `nombre del objeto`

const ejemploSuscripcion = `free`
//ahora llamos la variable objeto donde se encontraban contenidos los elementos + [variable contenedora del elemento]
tiposDeSuscripciones[ejemploSuscripcion]

//realizamos una función que al seleccionar un tipo de sescripción retorne o imprima el valor de dicha suscipción en este caso seria el mensaje de cada una "solo cursos gratis" etc.
//declaramos la función con sus nombre y le ponemos el parametro dentro de los parentesis (
//el parametro es el valor que tomara la respuestra o argumento que el usuario seleccione (en este caso las respuestas esperadas seran los planes basic, expert etc)para poder hacer la condición el valor que se va a verificar para dar respuesta
function conseguirTipoSuscripcion (suscripcion){
    //ponemos la condicion que vamos a verificar en este caso llamaos el arreglo de objetos donde estan guardados los tipos de sucripciones (nombres o keys)y sus valores ("solo cursos gratis" etc) y ponemos el parametro nuevamente que definimos en la función en este caso "[suscripcion]"lo enviamos encerrando el parametro en corchetes [] 
    if (tiposDeSuscripciones[suscripcion]){
        //ponemos el código que se ejecutara si el valor del parametro corresponde a alguno de los que esta en el objeto de tipos de suscripción
        console.log(tiposDeSuscripciones[suscripcion])
        //si ejecutamos el codigo y encontramos un valor valido en el parametro usamos "return;" para evitar que se siga ejecutanto
        return;
    }

    //en este caso imprimimos un mensaje que funcionaria a manera de "else" sin ser uno realmente si el parametro inresado no corresponde a ningun valor 
    console.warn(`Este tipo de suscripción no existe`)
};

//ESTE ES EL CODIGO SIN LOS COMENTARIOS
 function conseguirTipoSuscripcion (suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion])
        return;
    }
    console.warn(`Este tipo de suscrición no existe`)
 }

 //para mandar a llamar a la función que realizamos y nos permite verificar la suscripción
//ingresamos el nombre de la suscrpción como argumento
 conseguirTipoSuscripcion(`free`)