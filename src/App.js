import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
const counter = 0;

  function incrementCounter(){
    alert('hello');
  }

  return (
    <>
    <h1>Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;


// Componente:  Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação
// Propriedade: informações que um componente PAI passa para o componente FILHO
// Estado: 