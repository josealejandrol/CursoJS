import saludar,{PI, Saludar} from './constantes.js';
import {aritmetica} from './arimetica.js';

//importar por alias, darle otro nombre
import {aritmetica as calculos} from './arimetica.js';

console.log("Archivo modulo.js");
console.log(PI);

console.log(aritmetica.sumar(3,5));
console.log(calculos.restar(5,2));

saludar();

let saludo = new Saludar();

saludo;