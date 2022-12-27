
//para trabajar sobre las etiquetas del html (h1, h2, p , input, etc etc) la forma correcta de hacerlo es delcarando una variable con el nombre que queramos (en este caso titulo1, parrafo1 etc etc) y usamos el metodo "document  + . + el selector mas adecuado(querySelector, querySelectorAll, getElementsById, getElementByClassName etc etc) y seguido de entre parentesis la etiqueta (`h1`); (`.clase`); (`#id`); solo es necesario usar el "." antes de la clase cuando usamos el querySelector, pero no cuando usamos el getElementByClass lo mismo pasa cuando usamos el getElementById, no necesitamos el #
const titulo1 = document.querySelector(`h1`);

const parrafo1 = document.querySelector(`p`);

const parrafo2 = document.querySelector(`.parrafito`);

const parrafo3 = document.getElementById(`pid`);

const campoText = document.querySelector(`input`);

console.log(campoText.value);

console.log(titulo1);


console.log({
    titulo1,
    parrafo1,
    parrafo2,
    parrafo3
})


//para cambiar el texto de una etiqueta html desde JS podemos almacenar el valor de la etiqueta dentro de una variable en este caso tenemos titulo1 que esta almacenando el h1.
//para modificar el texto usamos "nombre de la variable + . +innerHTML (NO ES RECOMENDADO NO ES SEGURO) o innerText" 
titulo1.innerHTML = `Patito <br> feo`;
parrafo3.innerText = `Patito <br> feo`;
//la diferencia de innerText e innerHtml es que el html acepta etiquetas dentro por ejemplo el "<br>" que usamos cumplira sufunción de salto de linea, pero en el caso de innerText no, este se verá como texto.


//Para mandar a llamar un atributo usamo "nombre varible + . + getAttribute + (`nombre del atributo`)"

console.log(titulo1.getAttribute(`class`));
//Deberia imprimir el atributo "platzilg"(inventado) que usamos en la etiqueta h1
console.log(parrafo2.getAttribute(`class`));
//De igual forma podemo imprimir las clases e IDs ya que son atributos tambien



//para modificar los atributos usamos "nombre de la variable + . + setAttribute + (`atributo` + , + `nuevo valor atributo`)"
console.log(parrafo3.setAttribute(`id`,`nuevoId`));
//esta modificación solo la veremos si accedemos a traves de las devtools elements e inspecionamos el html


//si queremos agregar otra clase y dejar la que esta por defecto en el html usamos .classList (lo mas recomendable es trabajar con classlist siempre, este tiene varias propiedades como add, remove toggle, contains) así "nombre de la variable + . + classList + . + valor (add o remove o cualquiera) + (`valor nueva clase`)"

parrafo2.classList.add(`nuevaClase2`, `nuevaClse4`);
parrafo2.classList.add(`nuevaClase3`);

parrafo2.classList.remove(`nuevaClase2`);


//en el caso de los input podemo cambiar valores como el "value, placeholder entre otros" solo llamando la variable + . + value o placeholder = "nuevo texto"

campoText.value = "12345"
campoText.placeholder = "escribe aca"

//PARA CREAR UN ELEMENTO
// lo primero que tenemos que hacer es crear una varibale donde se va a contener el nuevo elemento y despues inicializarlo con el la propiedad document.createElement (`etiqueta`)

const nuevaEtiquetaImg = document.createElement(`img`);

//en el caso de las img y otras etiquetas necesitan si o si un atributo donde ira el link, es necesario agregarlo lo podemos hacer con setAttribute(`nombre atributo` , `valor atributo`)

nuevaEtiquetaImg.setAttribute(`src`, `https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`);

//despues de agregar la dirección de la imagen como tal mediante atributos tenemos que agregarla dentro de una etiqueta como tal dentro del html. Para agregar las iamagenes dentro de una etiqueta usamos propiedades como appen, appendChild , innerHTML(NO FUNCIONA CON IMAGENES) , entre otras
//"contenedor de etiqueta donde se agregara + . + append o appendChild etc ( variable creada para introducir la nueva etiqueta)"

parrafo3.append(nuevaEtiquetaImg);

