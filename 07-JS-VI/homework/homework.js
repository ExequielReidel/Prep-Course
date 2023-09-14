// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

   // Verificamos si el nombre es una cadena no vacía
   if (typeof nombre === 'string' && nombre.length > 0) {
    // Tomamos la primera letra del nombre y la convertimos a mayúscula,
    // luego concatenamos el resto del nombre (sin la primera letra) en minúscula
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  } else {
    // Si el nombre no es una cadena no vacía, devolvemos un mensaje de error
    return "Por favor, ingresa un nombre válido";
  }
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb ();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  // Verificamos si cb es una función antes de llamarla
  if (typeof cb === 'function') {
    // Llamamos al callback pasando n1 y n2 como argumentos
    return cb(n1, n2);
  } else {
    // Si cb no es una función, lanzamos un error o devolvemos un mensaje adecuado
    throw new Error('El tercer argumento debe ser una función.');
  }
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  const suma = numeros.reduce (function(acc, elementos){
    return acc + elementos;
  }, 0 );
 cb (suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach (function(valor){
    cb (valor);
  }, 0);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var qsy = array.map (function(algo){
    return cb (algo);
  });  
  return qsy;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // Utilizamos el método filter para crear un nuevo array con elementos que cumplan la condición
  const newArray = array.filter(function(element) {
    // Verificamos si el primer carácter del elemento es igual a "a" (en minúscula o mayúscula)
    return element.charAt(0).toLowerCase() === 'a';
  });

  return newArray; // Devolvemos el nuevo array con los elementos que cumplen la condición
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
