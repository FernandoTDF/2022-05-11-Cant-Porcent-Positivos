let contador: number = 0;
let contadorPositivos: number = 0;
let input: number = 1;

while (input != 0) {
  input = Number(prompt("ingrese un numero distinto de 0"));
  contador += 1;
  if (input > 0) {
    contadorPositivos += 1;
  };
   
  if (input==0){
    contador -= 1;
  };
  
}
console.log(
  contadorPositivos +
    " positivos, " +
    (contadorPositivos / contador) * 100 +
    "% del total"
);
