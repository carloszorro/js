//for loop
//Objetivo: Imprimir los números pares desde 0 hasta 20
//El for tiene 3 instrucciones internas en su declaración:
//1. Iniciar
//2. Condición de ejecución
//3. Como aumentar
for (var cont = 20; cont >= 0; cont = cont - 2) {
console.log(cont);
}

//do while
/*var name = "jenga";
var name_size = name.length;
cont = 0;
do {
    console.log(name.charAt(cont));
    cont = cont + 1;
} while (contname.length);
*/

var name = "carlos";
cont = name.length;
while(cont > 0) {
  cont = cont - 1;
  console.log(name.charAt(cont));
}

var name = "carlos";
cont = name.length - 1;
while(cont >= 0) {
    console.log(name.charAt(cont));
    cont = cont - 1;
}
