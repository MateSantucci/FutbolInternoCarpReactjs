import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
let clienteUno = {

  name:"Mateo",
  apellido:"Santucci",
  universitario : false ,
  cursos : ["Entrenamiento Deportivo","Entrenamiento Funcional","Entrenamiento Personalizado"]
}


const {universitario,cursos:[,,c],name,apellido} = clienteUno


let styles = {
 color:'rgb(258, 122, 287)',
 backgroundColor:'white'
}
export default App;
