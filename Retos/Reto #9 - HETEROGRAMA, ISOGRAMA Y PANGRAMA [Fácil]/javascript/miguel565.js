/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */

function esHeterograma(cadena){
    let caracteres = new Set(cadena.toLowerCase().replace(/ /g, ''));
    return cadena.lenght === caracteres.size;
}

function esPangrama(cadena){
    let caracteres = new Set(cadena.toLowerCase().replace(/[^a-z]/g, ''));
    return caracteres === 26;
}

function esIsograma(cadena){
    for (let i=0; i < cadena.lenght; i++){
        for (let j = i+1; j < cadena.length; j++){
            if(cadena[i] === cadena[j]){
                return false;
            }
        }
    }
    return true;
}