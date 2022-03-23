// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    const expectedError = new Error ('Não existe esse pokemom');
  });
  function callback(error, result) {
    expect(error).toEqual(expectedError);
    done();
  }

  getPokemonDetails((pokemom) => pokemom.name === 'Pikachu', callback);
});

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResp = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'
    
    function callback(error, result) {
      expect(result).toBe(expectedResp);
      done();
    }

    getPokemonDetails((pokemom) => pokemom.name === 'Chamander', callback);
  });

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.