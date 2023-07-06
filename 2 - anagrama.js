/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

var palabra1 = prompt("Ingresa tu palabra");
var palabra2 = prompt("Ingresa otra palabra para ver si es un anagrama")

function anagrama(palabra1, palabra2){
    if (palabra1.length == palabra2.length){
        palabra1.split().sort() == palabra2.split().sort()
        document.write("Es anagrama ;)");
        return true 
    } else {
        (palabra1 != palabra2)
        document.write("No es anagrama");
        return false
    }
}
anagrama(palabra1, palabra2)
