//PROMISES

/* function calculoDemorado(numero){
    let res = 0
    for(let i = 0; i<= numero;i++)
        res+=1
    return res
}
const resultado = calculoDemorado(10)
console.log(resultado) */

//AULA04

/* function calculoDemorado(numero){
    let p = new Promise(function(resolve, reject){
        resolve(1)
    })
    return p
}
const resultado = calculoDemorado(10)
resultado.then((res)=>{ //then pode receber arrow function ou function
    console.log("Resultado: "+res)
}) */

/* function calculoDemorado(numero){
    return new Promise(function(resolve, reject){
    if( numero <0)
        reject("Use valores positivos")
    else{
        let res = 0
        for(let i = 0; i<= numero;i++)
            res+= i
        resolve(res)
    }
    })
}
const resultado = calculoDemorado(10)
resultado
.then((resultado)=>
    console.log("Resultado: "+resultado))
.catch((erro)=> console.log(erro))

const resultado2 = calculoDemorado(-1)
resultado2
.then((res)=>
    console.log("Resultado: "+res))
.catch((erro)=> console.log(erro)) */

//Promise já chamou o método Resolve, porque a operação matemática era curta
//além de possivelmente não iria apresentar erros
/* function calculoRapidinho(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
    }
    calculoRapidinho(10).then((resultado) => {
    console.log(resultado);
    });
  //Executa primeiro, mesmo que a promise já esteja fullfilled
    console.log("Esperando..."); */