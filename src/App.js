import logo from './logo.svg';
import './App.css';
import Animals from './components/FirstBranch/Animals'
import Flowers from './components/SecondBranch/Flowers'

import MyContextForAnimalsFlowers from './context'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextForAnimalsFlowers.Provider value={{ count: count, setCount: setCount }}>
      <div className="App">
        <Animals />
        <Flowers />
      </div>
    </MyContextForAnimalsFlowers.Provider>
  );
}

export default App;
