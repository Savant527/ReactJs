import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//importar componentes
import MiComponente from './components/MiComponente';

function HolaMundo (nombre, edad){
  var presentacion = (<div>
     <h2>Hola, soy {nombre}</h2>
     <h3>Tengo {edad} Años</h3>
  </div>);
  return presentacion;
}

function App() {

var nombre = "Sebastian Navas";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo
        </p>
          {HolaMundo(nombre, 20)}
        <section className="componentes">
          <MiComponente/>

        </section>
      </header>
    </div>
  );
}

export default App;
