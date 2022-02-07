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
