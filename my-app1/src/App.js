import './App.css';
import axios from 'axios'
import {useState } from 'react'

function App() {
  const [state, setState] = useState({ usuarios: [], error: ''});

  function getUsuarios() {
    axios.get('http://localhost:8080/usuarios')
    .then(res => setState({...state, usuarios: res.data}))
    .catch(err => setState({...state, error: `Cannot get users ${err}`}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>{JSON.stringify(state.usuarios)}</h3>
        <h3>{JSON.stringify(state.error)}</h3>
        <button onClick={getUsuarios}>Get Usuarios</button>
      </header>
    </div>
  );
}

export default App;
