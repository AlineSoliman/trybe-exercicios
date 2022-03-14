const newEmployees = (createEmail) => {
    const employees = {
    id1: createEmail('Pedro Guerra'), 
    id2: createEmail('Luiza Drumond'), 
    id3: createEmail('Carla Paiva'), 
    }
    return employees;
};
console.log(newEmployees(createEmail));

function createEmail(nome) {
    const emailPeople = nome.toLowerCase().replace(/ /g,'_');
    return {nome, email: `${emailPeople}@trybe.com`}
};
let resultCreate = createEmail('Pedro Guerra');