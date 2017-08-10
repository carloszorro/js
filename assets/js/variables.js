{//variables con estados especiales
var uninitialized;
console.log(uninitialized);
var null_initialited = null;
console.log(null_initialited);
var error_math = 3/"a";
console.log(error_math);
var inf = 3/0;
console.log(inf);
var minus_inf= -3/0;
console.log(minus_inf);
}
{//variables con tipos de datos
  var object_name = {
    prop_name: "value",
    prop_1 : "algun valor guardado en esta llave",
    "2nd_key" : "",
    "ó" : "hola",
  };
  console.log(object_name["ó"]);
  console.log(object_name.prop_1);
  var integer_num = 1;
  var float_num = 3.141516;
  var const_math = Number.PI;
  var string = "cadena de caracteres";
  var smile = "😁";
  console.log(smile);
  var array_of_numbers = [1,2,0,0,0.2,Number.PI];
  var array_mix = ["a",0,array_of_numbers];
  var verdadero = true;
  var falso = false;
  var regular_expresion = /a*/;
  var function_var =  function() {
    //some instructiones;
  };
  function_var();
}
