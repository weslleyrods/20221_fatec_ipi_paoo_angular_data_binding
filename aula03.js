
//AULA 03

// function ola(){
//     let nome = `João`
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
// }
// let olaResult = ola()
// //esse resultado aqui é callable
// olaResult()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('Oi', 'João')
// let tchauJoao  = saudacoesFactory('Tchau','João')
// olaJoao()
// tchauJoao()

//Closure é o conjunto de uma função interna tem acesso as variaveis da função externa

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return{f1, f2} //devolve objeto Json. Não daria pra devoler as duas funcoes, ma so objeto Json permite

// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

//AULA 03 - JSON: jAVASCRIPT OBJECT NOTATION

/* let pessoa = {
    nome: 'João', //par chave/valor separados por virgula
    idade: 17
} 

console.log("Me chamo " + pessoa.nome)
console.log("Tenho " + pessoa["idade"]+" anos")
 */
/* 
const pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco:{
        logradouro: "Rua B",
        numero: 121
    }
}

//. é o operador de acesso a membros
//acessos as informações do objeto Json de várias formas
//com [] ou acessando os membros com o operador "."

console.log(`
    
    Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade},
    e moro na rua ${pessoaComEndereco.endereco['logradouro']},
    número ${pessoaComEndereco['endereco']['numero']}

`) */

//operador de desestruturização
//exemplo

/* const {endereco} = pessoaComEndereco
const {logradouro} = endereco
console.log(logradouro) */
/* const {nome, idade} = pessoa
console.log(nome)
console.log(idade) */


//cOLEÇÕES NO js COM jSON
//{} determina um objeto e [] vetor/ coleção json

// const concessionaria = {
//     cnpj: '000011111654-45',
//     endereco:{
//         logradoura: "Rua J",
//         numero: 10,
//         bairro: "Vila K"
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ka",
//             anoDeFabricacao: 2016
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2017

//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2020/* ,
//             revisoes: [] é possivel colocar coleções dentro de coleções*/
//         }
//     ]
// }

// //forEach do JS
// for (let veiculo of concessionaria.veiculos){

//     //operador de destruturização, usado para evitar repetição
//     const {marca, modelo, anoDeFabricacao} = veiculo
//     console.log("Marca: "+marca)
//     console.log("Modelo: "+modelo)
//     console.log("Ano: "+anoDeFabricacao)
// }

// //reescrever com for tradicional

// for(let i = 0; i < concessionaria.veiculos.length; i++){
//     //const {marca, modelo, anoDeFabricacao} = veiculo
//     console.log(`
//     Marca: ${concessionaria.veiculos[i].marca}
//     Modelo ${concessionaria.veiculos[i]["modelo"]}
//     Ano ${concessionaria.veiculos[i].anoDeFabricacao}
//     `) 
// }

// //for tradicional com o operador de destruturização
// for(let i = 0; i < concessionaria.veiculos.length; i++){
//     const {marca, modelo, anoDeFabricacao} = concessionaria.veiculos[i]
//     console.log("Marca: "+marca)
//     console.log("Modelo: "+modelo)
//     console.log("Ano: "+anoDeFabricacao)
// }



let calculadora = {
    soma: (a, b) => a + b,
    subtracao: function (a, b){
        return a - b 
    }
}

console.log(calculadora.soma(2, 2))
console.log(calculadora.subtracao(2, 2))

//OUTRA FORMA 
const soma = (a, b) => a + b
function subtracao (a, b){
    return a - b
}
let calculadora = {
    soma: soma,
    //soma, <- atalho para soma: soma,
    subtracao: subtracao

}
