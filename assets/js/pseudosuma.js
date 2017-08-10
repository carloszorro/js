//Nombres de las variables empiezan por Letra, _, $
var var_1 = 2435;//asignado por el usuario
var var_2 = 324;//asignado por el usuario
var cont = 0;
var res = 0;
//Validar parametros de entrada

if(var_1 >= 0 && (var_1%1) === 0 && var_2 >= 0 && (var_2%1) === 0) {
  //1. Asegurarme que inicia.
  //2. Asegurarme que termina.
  while (cont < var_2) {
    cont = cont + 1;
    res = res + var_1;
  }
  console.log("El resultado es: ");
  console.log(res);
}else {
  console.log("los números no son validos");
}
