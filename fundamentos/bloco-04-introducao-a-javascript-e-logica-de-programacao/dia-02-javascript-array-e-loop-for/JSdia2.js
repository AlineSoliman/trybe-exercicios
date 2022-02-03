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



