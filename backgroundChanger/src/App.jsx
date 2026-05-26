import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'purple',
    'black',
    'orange',
    'gray'
  ]

  return (
    <div 
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: c }}
            >
              {c}
            </button>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App