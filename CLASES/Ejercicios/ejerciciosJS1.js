
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "esto es un string porque esta entre comillas";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 22;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


/*---------------------------------------------------------------------------*/
function devolverString1(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString1("Cadena de texto devuelta por la funcion")); 

/*Flecha */
const devolverString11 = str => str
console.log(devolverString11("Cadena de texto devuelta por la funcion"))
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/

let suma = (x, y) => x+y
console.log(suma(10,10));
/*---------------------------------------------------------------------------*/
/* Resta ---------------------------------------------------------------------------*/
function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return y-x
}

/*Flecha */

const restaFlecha = (x, y) => y-x
console.log(resta(10,10));
/*--- */

/*---------------------------------------------------------------------------*/

/* Multiplicacion ---------------------------------------------------------------------------*/
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x*y
}

/*Flecha */
const multiplicaFlecha = (x, y) => x*y
console.log(multiplica(15,10));
/*--- */
/*---------------------------------------------------------------------------*/

/* Division ---------------------------------------------------------------------------*/
function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x/y
}

/*Flecha */
const divideFlecha = (x,y) => x/y
console.log(divide(100,5));
/*---*/

/*---------------------------------------------------------------------------*/

/* Comparacion de iguales---------------------------------------------------------------------------*/
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if (x===y){ /*Comparacion estricta */
    return true
  } else{
    return false
  }

}
/*Flecha*/
const sonIgualesFlecha = (x,y) => x===y ? true : false
console.log(sonIguales(10,10));
console.log(sonIguales(20,30));
/*---*/

/*---------------------------------------------------------------------------*/

/* Comparacion de longitud---------------------------------------------------------------------------*/
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length===str2.length){
    return true
  } else{
    return false
  }
}

/*Fecha*/
const tienenMismaLongitudFlecha = (str1, str2) => str1.length===str2.length ? true : false
console.log(tienenMismaLongitud("hola", "chau"))
/*---*/
/*---------------------------------------------------------------------------*/

/* Menor a 90---------------------------------------------------------------------------*/
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
if (num<90){
  return true
}else{
  return false
}
}

/*Fecha*/
const menosQueNoventaFlecha = num => num < 90 ? true : false
console.log(menosQueNoventa(89))
console.log(menosQueNoventa(91))
/*---*/

/*---------------------------------------------------------------------------*/

/* mayor de 50---------------------------------------------------------------------------*/
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50){
    return true
  }else{
    return false
  }
}

/*Flecha */
const mayorQueCincuentaFlecha = num => num>50 ? true:false
console.log(mayorQueCincuenta(60));
/*---*/
/*---------------------------------------------------------------------------*/

/* Resto---------------------------------------------------------------------------*/
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
return x%y
}

/*Flecha */
const obtenerRestoFlecha = (x,y) => x%y
console.log(obtenerResto(100,11));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2 === 0){
    return true
  }else{
    return false
  }
  
}
console.log(esPar(6));

/*Flecha */
const esParFlecha = (num) => num%2 ===0 ? true : false
console.log(esParFlecha(3));
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2 !== 0){
    return true
  }else{
    return false
  }
}
console.log(esImpar());

/*Flecha */
const esImparFlecha = (num) => num%2 !==0 ? true : false
console.log(esImparFlecha(3));
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num**2
}
console.log(elevarAlCuadrado(5));

/*Flecha */
const elevarAlCuadradoFlecha = (num) => num**2
console.log(elevarAlCuadradoFlecha(5));
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num**3
}
console.log(elevarAlCubo(5));

/*Flecha */
const elevarAlCuboFlecha = (num) => num**3
console.log(elevarAlCuboFlecha(5));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return num**exponent
}
console.log(elevar(5,4));

/*Flecha */
const elevarFlecha = (num,exponent) => num**exponent
console.log(elevarFlecha(5,5));
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}
console.log(redondearNumero(5.6));
console.log(redondearNumero(5.3));
/*Flecha */
const redondearNumeroFlecha = num => Math.round(num)
console.log(redondearNumeroFlecha(5.5));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}
console.log(redondearHaciaArriba(2.1));

/*Flecha */
const redondearHaciaArribaFlecha = num => Math.ceil(num)
console.log(redondearHaciaArribaFlecha(2.2)); //
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
return Math.random()
}
console.log(numeroRandom());

/*Flecha */
const numeroRandomFlecha = () => Math.random()
console.log(numeroRandomFlecha());
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero >0) {
    return "Es positivo"
  } else if (numero < 0){
    return "Es negativo"
  } else {
    return false
  }
}
console.log(esPositivo(2));
console.log(esPositivo(-5));
console.log(esPositivo(0));

/*Flecha */
const esPositivoFlecha = numero => numero > 0 ? "Es positivo" : (numero < 0 ? "Es negativo" : false);
console.log(esPositivoFlecha(10));
console.log(esPositivoFlecha(-50));
console.log(esPositivoFlecha(0));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str+"!"
}
console.log(agregarSimboloExclamacion("Hola"));

/*Flecha */
const agregarSimboloExclamacionFlecha = str => `${str}!`
console.log(agregarSimboloExclamacionFlecha("Chau"));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return nombre + " " + apellido
}
console.log(combinarNombres("Jhon", "Doe"));

/*Flecha */
const combinarNombresFlecha = (nombre,apellido) => `${nombre} ${apellido}`
console.log(combinarNombresFlecha("Jane", "Doe"));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!"
}
console.log(obtenerSaludo("Carlos"));

/*Flecha */
const obtenerSaludoFlecha = nombre => `Hola ${nombre}!`
console.log(obtenerSaludoFlecha("Charles"));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho
}
console.log(obtenerAreaRectangulo(5,6));

/*Flecha*/
const obtenerAreaRectanguloFlecha = (alto,ancho) => alto*ancho
console.log(obtenerAreaRectanguloFlecha(3,4));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado*4
}
console.log(retornarPerimetro(5));

/*Flecha */
const retornarPerimetroFlecha = (lado) => lado*4
console.log(retornarPerimetroFlecha(3));
/*---*/
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;

}
console.log(areaDelTriangulo(5,6));

/*Flecha */
const areaDelTrianguloFlecha = (base, altura) => (base*altura)/2
console.log(areaDelTrianguloFlecha(3,10));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2
}
console.log(deEuroAdolar(10));

/*Flecha */
const deEuroAdolarFlecha = euro => euro*1.2
console.log(deEuroAdolarFlecha(5));
/*---*/

/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  if (letra.length >1) {
    return "Dato incorrecto" 
  }
const vocales = ["A","a","e","i","o","u","E","I","O","U"];
for (let i = 0; i < vocales.length; i++) {
  if  (letra == vocales[i]){
    return "Es vocal"
  }
  
}
return "No es vocal"

}
console.log(esVocal("as"));
console.log(esVocal("A"));
console.log(esVocal("s"));
console.log(esVocal("u"));

/*Flecha */
const esVocalFlecha = letra =>{
  if (letra.length !=1) return "Dato incorrecto"
  letra = letra.toLowerCase();
  const vocales = ["a","e","i","o","u"];
  if (vocales.includes(letra)) {
    return "Es vocal"
  } else{
    return "No es vocal"
  }
}
console.log(esVocalFlecha("as"));
console.log(esVocalFlecha("A"));
console.log(esVocalFlecha("s"));
console.log(esVocalFlecha("u"));
/*---*/
/*---------------------------------------------------------------------------*/
