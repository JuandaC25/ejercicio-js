var Inicio = 0;
var Fin = 20;
var acumulado = Inicio + 1;


const Fibonacci = (Inicio, acumulado) => {       
        const Numero = new Set([Inicio,Inicio+1]);
        while( acumulado <= Fin){ 
        let resultado2 = Inicio + acumulado;
        if (resultado2 > Fin) break; 

        Numero.add(resultado2);
        Inicio=acumulado
        acumulado=resultado2}
    
    return Numero;
    }  
    console.log(Fibonacci(Inicio, acumulado));


const Fibonacci2 = (Inicio, acumulado) => {   
        
        const Numero2=[Inicio,Inicio+1];
        while( acumulado <= Fin){ 
        let resultado = Inicio + acumulado;
        if (resultado > Fin) break; 
        
        Numero2.push(resultado);
        Inicio=acumulado
        acumulado=resultado

    }   
        return Numero2;
    }  
    console.log("Array " + Fibonacci2(Inicio, acumulado));


const Fibonacci3 = (Inicio, acumulado) => {    

        Numero3 = new Map (Inicio,Inicio+1);
        let Mapeo = 1;
        let resultado3 = Inicio + acumulado;
        if (resultado3 > Fin); 
        Numero3.set (Mapeo, Inicio)
        Mapeo++;
        Inicio=acumulado
        acumulado=resultado3

    return Numero3;
    }  
    console.log(Fibonacci3(Inicio, acumulado));