// const a  = 2 + 5
// const b = 5
// console.log(a + b)


/* function demorada(){
    //o método .getTime() retorna uma data atual, contando desdde 01/12/1970 00:00
    //o valor é retornado em milissegundos
    const atualMais2Segundos =  new Date().getTime() + 2000 //mais 2s no futuro
    while (new Date().getTime() <= atualMais2Segundos); //para atrasar 
    const d = 8 + 4
    return d
}

const a  = 2 + 3
const b  = 5 + 9
const d = demorada()
//o valor de "e" não depende do valor devolvido pela função demorada.
const e = 2+a+b
console.log(e)  */
/* 
function demorada(){
    console.log("Começando a demorar")
    //o método .getTime() retorna uma data atual, contando desdde 01/12/1970 00:00
    //o valor é retornado em milissegundos
    const atualMais2Segundos =  new Date().getTime() + 2000 //mais 2s no futuro
    while (new Date().getTime() <= atualMais2Segundos); //para atrasar 
    const d = 8 + 4
    return d
}
const a  = 2 + 3
const b  = 5 + 9

setTimeout(function(){
    const d = demorada()
    console.log('d: '+d)
},1000) //o valor em ms garante que pelo menos 1000 tenha passado para a função ser executada, como um agendamento
// A função só será executada, após a finalização dessa contagem

//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const e = a + b +2
console.log("e: "+ e)
 */

//inferno das callbacks

//callback - uma função que é passada como parâmetro e ...

// const d = 2+8+a+b
// console.log(d)

/*
const fs = require("fs") //file system
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function (erro, conteudo){
        if(erro !==null){
            console.log("Erro")
            console.log(erro)
        }
        else{
            console.log(conteudo.toString())
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo ("arquivo.txt") */

/* const fs = require("fs") //file system  - importa o módulo
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function (erro, conteudo){
        if(erro !==null){
            console.log("Erro")
            console.log(erro)
        }
        else{
            console.log(conteudo.toString())
            const dobro = +conteudo.toString()*2 //o + converte string para number
            const finalizar = function(erro){
                if(erro){
                    console.log("Erro ao finalizar")
                }
                else{
                    console.log("Deu certo!")
                }
            }
            fs.writeFile("dobro.txt", 
            dobro.toString(),
            finalizar //callback?
            )
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo ("arquivo.txt")
 */

//PROMISES

/* function calculoDemorado(numero){
    let res = 0
    for(let i = 0; i<= numero;i++)
        res+=1
    return res
}
const resultado = calculoDemorado(10)
console.log(resultado) */

function calculoDemorado(numero){
    return new Promise(function(resolve, reject){
    let res = 0
    for(let i = 0; i<= numero;i++)
        res+= i
    resolve(res)
    })
}
const resultado = calculoDemorado(10)
resultado.then((resultado)=>{ //then pode receber arrow function ou function
    console.log("Resultado: "+resultado)
})

//outra forma
/* const finalizar = function(resultado){
    console.log(resultado)
}
resultado.then(finalizar) */