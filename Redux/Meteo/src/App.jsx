import './App.css';

function App() {
  return (
    <>
      <h1>Meteo</h1>
      
      <input type="text" placeholder="Buscar Ciudad..." />
      <button>Buscar</button>

      <div className="card">
        <h2>Nombre Ciudad</h2>
        <p>Condición: Soleado</p>
        <p>Temperatura: 25°C</p>
      </div>
    </>
  );
}

export default App;
