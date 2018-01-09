var a = 12;

if(true){
  console.log("Verdadero");
  for(var i = 0; i < 10; i++){
    console.log(i + "Cadena");
  };
  var c,d;
  function mifuncion(a,b){
        return c = a, d = b;
  };
  mifuncion(4,5);
  console.log("mi primer valor: "+ c + "," + "mi \segundo valor:" + d);
}else{
  console.log("Falso");
};
//console.log(a);
var miArray = ["Texto", 21, true, null, NaN, ["Textoo", "Textooo", "Textoooo"]];

var miObjeto = {
    miMetodo: function(){},
    miPropiedad: "cadena"
};
