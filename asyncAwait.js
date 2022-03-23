//ASYNC E AWAIT - Transforma uma função sincrona em assincrona

function fatoraial(n){
    if (n<0) return Promise.reject("Valor não pdoe ser negativo")
    let res = 1
    for (let i = 2; i<= n; i++) res *= i;
        //; - efeito no op
    return Promise.resolve(res)
}

//AWAIT só é usado em função que tenha sido chamada o async

async function chamadaComAsynAwait(){
    try{
        const f1 = await fatoraial(10)
    console.log(f1)
    const f2 = await fatoraial(-10)
    console.log(f2)
    }
    catch(e){
        console.log("Erro: " + e)
    }
}

chamadaComAsynAwait()

// function chamadaComThenECatch(){
// fatoraial(10)
//     .then(res => console.log(res))
//     .catch(erro=> console.log("Erro: "+ erro))

// fatoraial(-10)
//     .then(res => console.log(res))
//     .catch(erro=> console.log("Erro: "+ erro))
// }

// async function hello(nome){
//     return `Hello, ${nome}`
// }
// hello("João").then(res => console.log(res))

// function hello (nome){
//     return new Promise (function(resolve, reject){
//         resolve `Hello, ${nome}`
//     })
// }

// hello(`João`).then(res =>console.log(res))

// function hello(nome){
//     return `Hello, ${nome}`
// }