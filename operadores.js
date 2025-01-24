let inteiro = 10 // consigo executar calculos matemáticos
console.log(inteiro)
let soma = inteiro + 2
let subtracao = inteiro - 2
let divisao = inteiro / 2
let multiplicacao = inteiro * 2

console.log('soma de inteiro + 10 = ' + (inteiro + 10))

let prontoFloat = 10.5 // consigo executar calculos matemáticos 

let numString = '10' // casas decimais são com "." (ponto)
let somaString = numString + 2
// o operador + concatena e soma 
// concatena palavras mais qualquer coisa
// soma números
let subtracaoString = numString - 2
let divisaoString = numString / 2
let multiplicacaoString = numString * 2
console.log(somaString)
console.log(subtracaoString)
console.log(divisaoString)
console.log(multiplicacaoString)

// letras com operações matemáticas, retornam NaN (not a number)
// qualquer coisa que é somada, dividida ou multiplicada por NaN, retorna NaN.

let salario = prompt('Qual o seu salario?') // sempre retorna uma string
salario = Number(salario)
salario = salario + 1000 // importante converter o salario para Number antes de adicionar 1000, caso contrário, o Js vai fazer a operação como string
console.log(salario)
