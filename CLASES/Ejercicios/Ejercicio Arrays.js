/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */
let clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz","Eduardo"]

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
 const mostrarClasificacion = clasificaciones => {
    for (let i = 0; i < clasificaciones.length; i++) {
        console.log(clasificaciones[i]) ;
        
    }
    clasificaciones.forEach(element => {
        console.log(element);
    });
 }
console.log(mostrarClasificacion(clasificaciones));

//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
[clasificaciones[2], clasificaciones[3]] = [clasificaciones[3], clasificaciones[2]]
console.log(clasificaciones);

/* b)Eduardo es descalificado y se elimina del concurso */
let descalificado = clasificaciones.findIndex(clasificado => clasificado == "Eduardo")
clasificaciones.splice(descalificado,1)
console.log(clasificaciones);

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */


/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */


