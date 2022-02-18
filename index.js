//operadores de comparação por igualdade: == e o ===
// == compara e faz coerção implícita quando envolve objetos de tipos diferentes
//=== compara e não faz coerção. se os tipos forem diferentes, 
//ele já considera que os objetos são diferentes

/* console.log(1==[1])//true
console.log(1==[1])//false
console.log(null == null) //true
console.log(null == undefined)//true
console.log([] == false)//true
console.log([] == [])//false - referências diferentes

console.log(true == 1)//true
console.log(true === 1)//false

console.log(1 == 1) //true
console.log(1 === 1)//true
console.log(1 == "1")//true
console.log(1 === "1") //false */


//coerção
const n1 =2
const n2 = '3'
//coerção implícita
const n3 = n1 + n2
console.log(n3)
const n4 = n1 + Number(n2)
console.log(n4)

// var idade = 18
// console.log("Oi, "+ nome)
// if(idade>=18){
//     var nome = "João"
//     console.log("Parabéns, "+nome+". Você pode dirigir.")
// }
// console.log("Até mais, "+nome)


/* var linguagem = "JS"
console.log('Aprendendo: '+linguagem)
var linguagem = "Java"
console.log ("Aprendendo: "+linguagem) */

/* var c = 2+3
var d ="abcd"
d = true
c = 2 */

//const e let
// const nome = 'Jose'
// const idade = 27
// //Não existe char no JS, somente String
// const sexo = "M"
// const endereco = `Rua K, 
// 12` //crase permite pular linha

// let a = 2
// a = 1
// let b = "abc"
// b = true

//JS tem dinamicamente tipada: acontece em tempo de compilação
// n = 2
// n = "abc"
// n = true 



