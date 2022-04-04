import "./App.css";

const array = [
  "aprender React",
  "praticar inglês",
  "fazer exercícios",
  "continuar ontrack na Trybe",
  "fazer todos os projetos",
];
const lista = array.map((element) => <li>{element}</li>);
const Task = (value) => {
  return value;
};

function App() {
  return Task(lista);
}

export default App;
