
// ***VETORES EM JS***

// v2= [2, "abc", true]
// for(let i=0; i<v2.length;i++){
//     console.log(v2[i])
// }

// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"
// console.log(v1.length)
// for(let i=0; i<v1.length;i++){
//     console.log(v1[i])
// }

//Iterando vetor com forEach
//essa forma ignora os índice vazios
// v1.forEach(function(valor) {
// console.log(valor);
// });

//Outra forma de iterar vetor com forEach
//essa forma ignora os índice vazios
/* v1.forEach (valor =>{
console.log(valor)})  */

//const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

//exemplo 1 de Arrow Function
//1º parentes é da função filter
//o 2º parentes é da arrow function, sendo que o mesmo é opcional 
//por conter apenas um parâmetro
// n - representa os elementos dos vetores
//Quando escrevemos uma arrow function, especificamos somente 
//a sua lista de parâmetros e o seu corpo
// const apenasComA = nomes.filter( (n) => {return n.startsWith("a")} )
// console.log(apenasComA)

// const res = nomes.map((nome)=>{return nome.charAt(0)})
// console.log(res)

//retorno booleano
// const todosComecaComA = nomes.every((nome)=>{return nome.startsWith("A")})
// console.log(todosComecaComA)


// O método `.reduce()` resume a coleção a um valor só (pode ser soma, média...)
// O acumulador (parâmetro `ac`), quando não inicializado manualmente, 
// é inicializado com o valor do 1º índice do vetor, porque o método `.reduce()` implicitamente 
// já faz a 1º passagem pelo vetor, logo, o valor da vez (parâmetro `v`) corresponderá a vez seguinte, 
// ou seja, o 2º indice do vetor
// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma) //resulta em 10

// const v = [1, 2]
// //isso sim
// v[0] = 3
// //isso não
// v = 2


// ***FUNÇÕES EM JS***
// const ehPar = (n)=>{
//     //ou coloca return para funcionar ou remove as chaves
//     n %2 === 0
// }
// console.log(ehPar(4))

// const triplo = (valor) =>{
//     return valor*3
// }
// console.log(triplo(2))

//outra forma de escrever uma Arrow Function
// const hello = () => {console.log("Hello")}
// const hello = () => console.log("Hello")
// hello()

// const dobro = (valor)=> valor *2
// console.log(dobro(10))


// *** FUNÇÕES ***
//Exemplo 1
/* function soma (a, b){
    console.log(a)
    console.log(b)
    return a+b 
}
// const res = soma(2,3)
// console.log(res)

//Curiosidade
const res = soma()
console.log(res)//retorno Not a Number

const res = soma(2,3,4)
console.log(res) */

//*** FUNÇÕES ***
/* function hello(){
    console.log("Oi")
}
hello() //chamada da função

function hello(nome){
    //console.log("oi, "+ nome)
    console.log(`Oi, ${nome}`) //tipo o printf do C
    //outra forma
    //textoResultante = `Oi, ${nome}`
}
hello("Pedro") //Ocorre sobr, por causa da dupla passagem
//o 1º print fica undefined, porque na 1º passagem pelo script não havia valor atribuito a variavel nome. 
//Note que essa 1º impressão é o "Oi," e não "Oi"
//na 2 º chamada, com a sobrescrita de método, o valor atribuido a variavel nome já estava guardado
//e a impressão pode ser completada com o o nome passado por parâmetro na chamda */
/** 

// *** FUNÇÕES ANÔNIMAS ***
// A função anônima é uma função sem nome
// Uma função anônima geralmente não está acessível após a sua criação.
// Por isso, uma vez criadas, elas podem ser atribuídas a variáveis ou constantes

/* const dobro = function(n){
    return n*2
}

const res = dobro(5)
const n = 5
console.log(`2 * ${n} = ${dobro(n)}`) */

// *** Valor padrão para o parâmetro ***

// Quando na chamada da função NÃO passar nenhum parâmetro, a função em sí já terá um valor reservado
//  No exemplo abaixo, por padrão a função vale 5, 
// ou seja, na chamada de console.log(triplo()) a variável n dentro do corpo da function valerá 5, 
// número já reservado no parâmetro da function, (n=5)

/*
const triplo = function (n=5) {
    return 3*n
}
console.log(triplo(4))
console.log(triplo())*/

//Exemplo 2

/* const triplo = function (n = 5) {
return 3 * n;
};
console.log(triplo());
console.log(triplo(10)); */


// *** ARROW FUNCTION ***

/* const hello = () => console.log("Hello");
hello(); */

// *** CLOSURE ***

//Cidadãs de Primeira Classe
    // - Ser passada como argumento para uma função.
    // - Ser devolvida por uma função.
    // - Ser atribuída a uma variável.

//Função atribuída a uma variável.
/* let umaFuncao = function(){
    console.log("Fui armazenada em uma variavel")
}
umaFuncao()
console.log(umaFuncao()) */

// //Função de Alta Ordem - pois recebe uma função como parâmetro
function f (funcao){
    funcao()
}

//Função de Alta Ordem - pois recebe uma função como parâmetro
function g(){
    //função g criada a função internamente
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
}

f(function(){
    console.log("Estou sendo passada por parametro para f")
})


const resultadoDaG = g() //chama função a função e armaneza o resultado
resultadoDaG() //para imprimir o resultado


console.log("*************")
//1º () chama função 2º () chama o resultado da função
//g()()

//f(g) //sem retorno, porque 
//f(g()) //o retorno da g

//f chama a função g, porem na a chamada da função outraFuncao dentro g não tem return
//logo, o resultado da chamada de f(g()()) será undefined 
//f(g()()) 

//f(1) //retorna undefined, porque o parâmetro é number e não uma função




