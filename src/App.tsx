import React from 'react';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} />
    </div>
  );
}

export default App;
