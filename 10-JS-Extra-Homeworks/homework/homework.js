// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    const matriz = [];

    // Recorremos las propiedades del objeto
    for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        // Creamos un subarray con la clave y el valor y lo agregamos a la matriz
        matriz.push([clave, objeto[clave]]);
      }
    }
  
    // Devolvemos la matriz resultante
    return matriz;
  }
  
  // Ejemplo de uso:
  const objeto = {
    D: 1,
    B: 2,
    C: 3
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  const resultado = {};

  // Recorremos el string
  for (let i = 0; i < string.length; i++) {
    const caracter = string[i];
    
    // Verificamos si el carácter ya existe en el objeto resultado
    if (resultado.hasOwnProperty(caracter)) {
      // Si existe, incrementamos el contador
      resultado[caracter]++;
    } else {
      // Si no existe, lo agregamos al objeto con valor 1
      resultado[caracter] = 1;
    }
  }

  // Devolvemos el objeto con los resultados
  return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  let mayusculas = '';
  let minusculas = '';

  // Separar letras mayúsculas y minúsculas
  for (let i = 0; i < s.length; i++) {
    const caracter = s[i];
    if (caracter === caracter.toUpperCase()) {
      mayusculas += caracter;
    } else {
      minusculas += caracter;
    }
  }

  // Concatenar letras mayúsculas al principio de las minúsculas
  const resultado = mayusculas + minusculas;

  return resultado;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  const palabras = str.split(' ');

  // Itera sobre cada palabra y la invierte
  const palabrasInvertidas = palabras.map(palabra => {
    return palabra.split('').reverse().join('');
  });

  // Une las palabras invertidas en una nueva frase
  const fraseInvertida = palabrasInvertidas.join(' ');

  return fraseInvertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  const numeroStr = numero.toString();

  // Invertimos la cadena
  const numeroInvertido = numeroStr.split('').reverse().join('');

  // Comparamos la cadena original con la invertida
  if (numeroStr === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  // Utilizamos el método replace para reemplazar todas las ocurrencias de "a", "b" y "c" por una cadena vacía
  const cadenaModificada = cadena.replace(/[abc]/g, '');

  return cadenaModificada;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  // Utilizamos el método sort con una función de comparación personalizada
  arr.sort(function(a, b) {
    // Comparamos las longitudes de las cadenas
    return a.length - b.length;
  });

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
 // Filtramos los elementos de arreglo1 que también están en arreglo2
 const interseccion = arreglo1.filter(elemento => arreglo2.includes(elemento));

 return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

