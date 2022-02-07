let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};
// Para acessar as chaves dentro de um objeto, pode-se usar notação de ponto ou notação de colchetes. 

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};
// diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo

let conta = {
    agencia: '0000',
    banco: {
     cod: '012',
     id: 4,
     nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank

  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000

  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

//   Neste exemplo, a chave banco do objeto conta , guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
    },
    },
};

  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com

  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco , que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// //   O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco , que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals:{
        golden:2,
        silver:3,
    }
}

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log("A jogadora "+player.name +' '+ player.lastName + " tem " + player.age + ' anos de idade.');

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld=[2006, 2007, 2008, 2009, 2010, 2018]

console.log(player);
console.log("A jogadora "+player.name +' '+ player.lastName + " foi eleita a melhor do mundo por " +player.bestInTheWorld.length + " vezes");

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log("A jogadora possui "+ player.medals.golden + " medalhas de ouro e "+ player.medals.silver + " medalhas de prata.");

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let index in names) {
    console.log("Olá", names[index]);
}


// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let index in car) {
    console.log(index, car[index]);
}

// *******************************
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log('Bem vinda, '+ info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim'

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(let index in info){
    console.log(index);
}
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for(let index in info){
    console.log(info[index])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for(let index in info){
    for(let index in info2)
    console.log(info[index] + " "+info2[index])
    if (info.recorrente == 'Sim'&& info2.recorrente == 'Sim'){
        console.log("Ambos recorrentes");
}
};