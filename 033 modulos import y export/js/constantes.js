//Podemos exportar solo lo que necesitamos
//con la palabra "export"
export const PI = Math.PI;

let usuario = "Jose";
let password = "1234";

//Exportación en forma de objeto
//export { PI, usuario, password };

//Función expresada ya que esta guardada en una variable
//No se puede exportar una función expresada o variable al momentos
const hello = () =>{
    console.log("Hola");
}


//Cuando se mande a llamar esta función se export por defecto
export default function saludar(){
    console.log("Hola Módulos ECMASCript 6")
}


//Las funciones y clases si se pueden exportar por defecto
export class Saludar{
    constructor(){
        console.log("Hola Módulos ES6")
    }
}
