import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("#FF2C2C")

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return (
    <>
    <div className='container'> 
      <h1>Color <span>Picker</span></h1>
      <div className="color-display" style={{backgroundColor:color}}>
      <p>Selected Color:{color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
     
    </>
  )
}

export default App
