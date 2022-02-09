let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); // length - quantidade de elementos

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);


let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

//Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.

tasksList.unshift('exercício fisico');  // adiciona mais uma tarefa
console.log(tasksList);


tasksList.pop();  // remove a última tarefa
console.log(tasksList);

//O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado.

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião'); //indexOf() procura i índice de um item no Array.
console.log(indexOfTask);


//************************************** */

// For

var numero = 7;
for (var contador =1; contador <=9; contador ++) {
    console.log("*")
    console.log(numero * contador)
}


var listaDeNomes = ["Joana", "Maria", "Lucas"];

//inicialização - condição de parada - incremento ou decremento
for (var indice = 0; indice < listaDeNomes.length; indice ++) {
    var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem)
}

// Sendo assim, uma vez que o += 1 substitui completamente o ++ , recomenda-se o uso exclusivo de += 1 , e é essa a regra que iremos adotar neste conteúdo daqui pra frente!

// Obtenha o valor "Serviços" do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// Procure o índice do valor "Portfólio" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let elemento = 'Portfólio';
let indexOfPortfolio = menu.indexOf(elemento);

console.log(indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu :

menu.push("Contato")
console.log(menu);

//FOR

let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW




for (let index = 0; index < cars.length; index += 1) {
console.log(cars[index]);
}

// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i=0; i<groceryList.length; i+= 1){
    console.log(groceryList[i]);
}

 //FOR /OF

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
console.log(numero);
}

// O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
// // Vamos para outro exemplo:

let word = 'Hello';
for (let letter of word) {
console.log(letter);
}

// Por fim, com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
sum += 1;
console.log(sum);
}
// É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.
console.log(arrOfNumbers);

// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let elemento of names)
console.log(elemento);

//Exercícios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(elemento of numbers)
console.log(elemento)
 //Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let i=0;
let soma=0;
for(let i = 0; i< numbers.length; i += 1){
    soma = soma + numbers[i] //armazenar número
}
console.log(soma);


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media;

media = soma/(numbers.length);
console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


if (media>20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];
for(let i = 1; i< numbers.length; i+=1){

if(numbers[i]>maiorNumero){
    maiorNumero=numbers[i];//se for maior, armazena / senão volta p laço.
}
}

console.log(maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = [];

for (let i = 0; i< numbers.length; i += 1) {

if (numbers[i]%2 != 0 ){
    impar.push(numbers[i]);
}
}
if(impar.length>0){
console.log(impar.length)
}else{
    console.log("nenhum valor ímpar encontrado");
}


// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let i = 1; i< numbers.length; i += 1){ ///FECHARRRRRRRRRRRRRRRR {{{{{{{{{{}}}}}}}}}}

if(numbers[i]<menorNumero){  
    menorNumero = numbers[i];
}
}
console.log(menorNumero);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let index = 1; index <=25; index+=1){
    array.push(index)
}
console.log(array);


// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let index = 1; index < array.length; index+=1) {
    console.log(array[index]/2);
}