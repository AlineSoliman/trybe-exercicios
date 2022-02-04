const myName = "Aline Soliman";
const birthCity = "Santa Isabel";
let birthYear = 1988;
console.log(myName);
birthYear = 2030 // tipagem dinâmica
console.log(birthYear)



const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

//********************************** */

const a = 15;
const b = 20;

const adição = (a+b);
console.log(adição)

const subtração = (a-b);
console.log(subtração)

const multiplicação = (a*b);
console.log(multiplicação)

const divisão = (a/b);
console.log(divisão)

const módulo = (a%b);
console.log(módulo)

//************************************* */

var exercicio2 = "exercicio2"
console.log(exercicio2)

const c = 25;
const d = 20;

if(c>d) {
  console.log(c);
}
else {
  console.log(d);
}
//************************************ */
var exercicio3 = "exercicio3"
console.log(exercicio3)

const e = 45;
const f = 55;
const g = 33;

if(e>f&&e>g) {
  console.log(e)
}
else if(f>e&&f>g) {
  console.log(f)
}
else {
  console.log(g);
}


//************************************ */
var exercicio4 = "exercicio4"
console.log(exercicio4)

const x = 27;

if (x > 0) {
  console.log("positive");
} 
else if (x < 0) {
  console.log("negative");
}
else {
  console.log("zero");
}

//************************************ */
var exercicio5 = "exercicio5"
console.log(exercicio5)

const angulo1 = 26;
const angulo2 = 52;
const angulo3 = 48;

let anguloTriangulo = (angulo1+angulo2+angulo3);

if (angulo1 < 0 || angulo2 < 0 || angulo3 <0){
  console.log ("ângulo inválido!")
}
else if (anguloTriangulo == 180) {
  console.log(true)  
} else {
  console.log(false) 
}

//************************************ */
var exercicio6 = "exercicio6"
console.log(exercicio6)

// torre -> linha reta

let peca = "TORRE";
let pecaXadrez = peca.toLocaleLowerCase();

if (pecaXadrez == "torre" ) {
  console.log("Essa peça se move em linha reta");
} else {
  console.log("Não reconheço essa peça");
}


//************************************ */
var exercicio7 = "exercicio7"
console.log(exercicio7)

let Porcentagem = 45

if (Porcentagem <0 || Porcentagem > 100) {
  console.log("Insira uma porcentagem válida");
}
else if (Porcentagem >= 90){
  console.log("A");
} 
else if(Porcentagem >= 80) {
  console.log("B");
} 
else if (Porcentagem >= 60) {
  console.log("C");
}
else if (Porcentagem >= 50) {
  console.log("D");
}
else {
  console.log("F");
}

//************************************ */
var exercicio8 = "exercicio8"
console.log(exercicio8)


// const num1 = 5;
// const num2 = 6; 
// const num3 = 8;

// let par = "false"

// if (num1%2 == 0 || num2%2 == 0 ||num3%2 == 0);{
//   par = "true";
// };
// console.log(par);


//************************************ */
var exercicio9 = "exercicio9"
console.log(exercicio9)


const num1 = 5;
const num2 = 6; 
const num3 = 8;

let impar = "false"

if (num1%2 != 0 || num2%2 != 0 ||num3%2 != 0);{
  impar = "true";
};
console.log(impar);


//************************************ */
var exercicio10 = "exercicio10"
console.log(exercicio10)

const custo = 23;
const venda = 65;

const custoTotal = custo*0.2+custo;

const lucro = custoTotal*venda;

if(custo < 0 || venda < 0) {
  console.log("Coloque um valor válido");
} else if (lucro*1000!= 0){
  console.log(lucro*1000);
}

//************************************ */
var exercicio11 = "exercicio11"
console.log(exercicio11)


let salarioBruto = 3000,00

if(salarioBruto até R$ 1.556,94)
  console.log( 8/100);
else if (salarioBruto > 1.556,95 && salarioBruto < 2.594,92) {
  console.log( 9/100)
}
else if (salarioBruto > 2.594,93 && salarioBruto < 5.189,82) {
  console.log( 11/100)
}
else (salarioBruto > 5.189,82) {
  console.log( 570,88)
}
if

// IR (Imposto de Renda)

let salario;

if (salario < 1.903,98) {
  console.log(0);
} 
else if(salario >= 1.903,99 && salario <= 2.826,65){
  console.log(142,80);
}
else if(salario >= 2.826,66 && salario <= 3.751,05){
  console.log(354,80);
}
else if(salario >= 3.751,06 && salario <= 4.664,68){
  console.log(636,13);
}
else(salario > 4.664,69 ){
  console.log(869,36);
}
















