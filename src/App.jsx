import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () =>{
    setCount(count + 1)
  };

  const reduce = () =>{
    setCount(count - 1)
  };
  return (
    <>
    <h1>Hola mundo</h1>
    <p>Cuestion, que toy jodio</p>
    <br/>
    <div style={{margin: '20px', backgroundColor: 'white', } }>

    <button onClick={incrementar}>po cuenta</button>
    <br />
    <button onClick={reduce}>po, cuenta hacia atra</button>
    <p>{count}</p>
    </div>
    </>
  )
}

export default App
