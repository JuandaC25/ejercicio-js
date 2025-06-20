//const Promesa1 = new Promise((resolve,reject) =>{
//const funciona = true
//}




/*const tarea=() => {
    return new Promise((resolve,reject) => {
    const tiempo = Math.floor(Math.random()*4000);
    console.log(tiempo);
    setTimeout(()=> {
        if(tiempo<=2000){
        resolve("Se cumplio la tarea")
        }
        else{
        reject("El tiempo expiro")
        }
    }, tiempo);
    })
}

tarea()
    .then((Completado) => {
    console.log(Completado);
}).catch((incompleto)=> {
    console.log("Ocurrio un problema", incompleto);
});
*/

var nombre = ("Alejo")
const comparacion=() => {
    return new Promise((resolve,reject) => {
    const nombremayus= nombre.toUpperCase()
    const Nombreminus = nombre.toLowerCase()
        if(nombre == nombremayus && nombre !=Nombreminus) {
        resolve("Su nombre posee letras mayusculas")
        }
        else{
        reject("Su nombre posee letras minusculas")
        }
    return nombremayus
        }        
     );
    }

comparacion().then((Completado,) => {
    console.log(Completado);
}).catch((incompleto)=> {
    console.log(incompleto);
});



/*var Notas = "40"
const comparacion=() => {
    return new Promise((resolve,reject,intermediate) => {
        if(Notas >= 35){
        resolve("Felicidades, aprobaste, eres muy inteligente")
        }
        else{
        reject("Lo siento mucho, no aprobaste, deserte")
        }
    }, );
    }

comparacion().then((Completado,) => {
    console.log(Completado);
}).catch((incompleto)=> {
    console.log("Oh no,", incompleto);
});
*/














