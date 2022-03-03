//AULA 03

//Closure é o conjunto de uma função interna tem acesso as variaveis da função externa

// *** CLOSURE com função sem parâmetro***

/* function f() {
    let nome = "João";
    function g() {
    console.log(nome);
    }
    g();
}
f(); */

// *** CLOSURE com função anônimas ***

/* function ola() {
    let nome = `João`;
    return function () {
    console.log(`Ola, ${nome}`);
    };
}
let olaResult = ola();
//esse resultado aqui é callable
olaResult(); */

 // *** CLOSURE com parâmetro***

//Exemplo 1
/* const dobro = function (n) {
     return n * 2;
    }; 
console.log(dobro(4));*/

//Exemplo 2

/* function saudacoesFactory(saudacao, nome){
    return function(){
        console.log(`${saudacao}, ${nome}`)
    }
}

let olaJoao = saudacoesFactory('Oi', 'João')
let tchauJoao  = saudacoesFactory('Tchau','João')
olaJoao()
tchauJoao() */

// CLOSURE com contador++
//Neste momento, a função eAgora() já executou por completo e a variável cont já foi incrementada.
//Seu valor final é mantido e, assim, ambas funções f1() e f2() exibirão 2.

/* function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    //devolve objeto Json. 
    //Não daria pra devoler as duas funcoes de forma independente na chamada, mas o objeto Json permite
    return{f1, f2} 
    //return f1(), f2()
}

let eAgoraResult = eAgora()
//chamando as funções de forma independente
eAgoraResult.f1()
eAgoraResult.f2() */

//*** JSON: JAVASCRIPT OBJECT NOTATION ***

/* let pessoa = {
    nome: 'João', //par chave/valor separados por virgula
    idade: 17
} 

console.log("Me chamo " + pessoa.nome)
console.log("Tenho " + pessoa["idade"]+" anos") */


//Objeto JSON dentro de outro objeto JSON
/*  const pessoaComEndereco = {
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

`)  */

// *** Operador de desestruturização de objetos ***

//exemplo 1 com desestruturização

/* const {nome, idade, endereco} = pessoaComEndereco
console.log(`
    Meu nome é ${nome}, tenho ${idade} e moro na ${endereco.logradouro}, número ${endereco.numero}
`) */

//exemplo 2 com desestruturização

/* const {endereco} = pessoaComEndereco
const {logradouro} = endereco
console.log(logradouro)
const {nome, idade} = pessoa
console.log(nome)
console.log(idade) */

//exemplo SEM a desustruturização

/* const nome = pessoaComEndereco.nome
const idade= pessoaComEndereco.idade
const logradouro = pessoaComEndereco.endereco.logradouro
const numero = pessoaComEndereco.endereco.numero
console.log(nome)
console.log(idade)
console.log(logradouro)
console.log(numero) */


//Coleções no JS com JSON
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
//             anoDeFabricacao: 2020,/*
//             revisoes: [] //é possivel colocar coleções dentro de coleções*/
//         }
//     ]
// } 


// *** Iterando a coleção de JSONs com forEach e for tradicional ****

//forEach do JS
/* for (let veiculo of concessionaria.veiculos){

    //operador de destruturização, usado para evitar repetição
    const {marca, modelo, anoDeFabricacao} = veiculo
    console.log("Marca: "+marca)
    console.log("Modelo: "+modelo)
    console.log("Ano: "+anoDeFabricacao)
} */

//reescrita com for tradicional

/* for(let i = 0; i < concessionaria.veiculos.length; i++){
    //poderia ter utilizado a destruturização, consequentemente
    //dipensando a repetição da chamada do indice [i]
    //const {marca, modelo, anoDeFabricacao} = veiculo
    console.log(`
    Marca: ${concessionaria.veiculos[i].marca}
    Modelo ${concessionaria.veiculos[i]["modelo"]}
    Ano ${concessionaria.veiculos[i].anoDeFabricacao}
    `)
} */

//for tradicional com o operador de destruturização

/* for(let i = 0; i < concessionaria.veiculos.length; i++){
    const {marca, modelo, anoDeFabricacao} = concessionaria.veiculos[i]
    console.log("Marca: "+marca)
    console.log("Modelo: "+modelo)
    console.log("Ano: "+anoDeFabricacao)
} */

// *** Funções armazenadas Objetos JSON ***
/* let calculadora = {
    soma: (a, b) => a + b,
    subtracao: function (a, b){
        return a - b
    }
}

console.log(calculadora.soma(2, 2))
console.log(calculadora.subtracao(2, 2)) */

//OUTRA FORMA
/* const soma = (a, b) => a + b
function subtracao (a, b){
    return a - b
}
let calculadora = {
    //soma: soma, 
    soma, //<- atalho para soma: soma,
    subtracao: subtracao
}
console.log(calculadora.soma(2,2))
console.log(calculadora.subtracao(2, 2)) */