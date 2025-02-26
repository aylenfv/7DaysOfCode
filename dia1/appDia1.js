// Por lo tanto, tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:

let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (numeroUn == stringUn && numeroUn !== stringUn) {

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')

}

 

if (numeroTreinta === stringTreinta) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else if ( typeof(numeroTreinta) != typeof(stringTreinta) ){

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}

 

if (numeroDiez == stringDiez && numeroDiez !== stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else if (numeroDiez != stringDiez){

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

}

function comparar (x,y) {
  if (x === y) {
    console.log(`Las variables ${x} y ${y} tienen el mismo valor y el mismo tipo`);
  } else if ( x == y && x !== y) {
    console.log(`Las variables ${x} y ${y} tienen el mismo valor, pero tipos diferentes`);
  } else if (typeof(x) == typeof(y)){
    console.log(`Las variables ${x} y ${y} tienen el mismo tipo, pero con diferente valor`);
  } else {
    console.log(`Las variables ${x} y ${y} no tienen el mismo valor, ni el mismo tipo`);
  }
}

comparar(numeroUn,stringUn);
comparar(numeroTreinta,stringTreinta);
comparar(numeroDiez,stringDiez);