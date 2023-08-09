/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { nuevoUsuario } = require("../M06 JavaScript Objetos/homework")

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length-1]
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
  
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var numeros =[]
   for (let index = 0; index < array.length; index++) {
      numeros.push(array[index] +1)  
   }
   return numeros;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  return palabras.join(' ')
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   /*for (let i = 0; i < array.length; i++) {
      if (array[i]=== elemento){
         return true
      }      
   }
   return false*/
   return array.includes(elemento)
} 

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var total = 0 
   for (let i = 0; i < arrayOfNums.length; i++) {
      total = total + arrayOfNums[i]
   }
   return total; 
 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var acumulador = 0;
   for (let index = 0; index < resultadosTest.length; index++) {
       acumulador += resultadosTest[index]      
   }
   var promedio = acumulador / resultadosTest.length
   return promedio
}  

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMax = 0
   for (let index = 0; index < arrayOfNums.length; index++) {
       if (arrayOfNums[index]>numeroMax){
         numeroMax = arrayOfNums[index]
       }
   }
   return numeroMax

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código: 
   
   // funcion multiplicarArguemtos(){}
    
   if (arguments.length === 0){
      return 0;
   }else if (arguments.legth ===1){
   
      return arguments[0];
   }else {
      var numeros = 1
      for (let index = 0; index < arguments.length; index++) {
         
         numeros = numeros * arguments[index]
      }
      return numeros 
   } 
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // funcion cuentoElemenmtos (array)
  /* var contador = 0;
   for (let index = 0; index < array.length; index++) {
      if (array[index]>18 ){
         contador = contador +1
      }
   }return contador;*/
   return array.filter(num=>num > 18).length
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:


return numeroDeDia === 1 || numeroDeDia === 7 ?  "Es fin de semana" : "Es dia laboral" ; 

}


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   num = num.toString(); 
   if(num.charAt(0) === "9"){
      return true;
   } return false;
}


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
        //       0 8 2 5      ||  0 8 2 5
   return new Set(array).size!==array.length; true

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

  var meses = ["Enero", "Marzo" ,"Noviembre"]
  var todos = []
  array.forEach(element => {

   if (meses.includes(element)){
       todos.push(element);
   }
   
  });
  if (todos.length === 3){
   return todos;
  }return "No se encontraron los meses pedidos"

}
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
  
 var resultados = [] ; 

  for (let i = 0; i <= 10; i++) {
     var resultado = 6 * i;
     resultados.push(resultado);
   }
   return resultados; 
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresAcien = [];
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 100){
         mayoresAcien.push(array[i]); 
      }
   }
   return mayoresAcien;
  
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   let aux = [];
   let aux2 = false;
   
   for(let i = 0; i < 10; i++){
      num += 2; 
      aux.push(num);
      
      if(num === i){
         aux2 = true;
         break;
      }
   }

   if (aux2) {
      return "Se interrumpió la ejecución";
   }
   return aux;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
    
   let aux = [];

   for (let i = 0; i < 10; i++){
       if (i === 5){
         continue
       }
       num += 2;
       aux.push (num);
   }
   return aux;
}   

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
