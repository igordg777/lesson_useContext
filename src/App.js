import logo from './logo.svg';
import './App.css';
import Animals from './components/FirstBranch/Animals'
import Flowers from './components/SecondBranch/Flowers'

import MyContextForAnimalsFlowers from './context'

import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const countItem = localStorage.getItem('count') || 0;
    setCount(JSON.parse(countItem))
  }, [])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])


  return (
    <MyContextForAnimalsFlowers.Provider value={{ count: count, setCount: setCount }}>
      <div className='App'>
        <Animals />
        <Flowers />
      </div>
    </MyContextForAnimalsFlowers.Provider>
  );
}

export default App;
