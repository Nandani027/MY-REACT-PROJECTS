import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    alert('Password copied!')
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-black via-purple-950 to-pink-950 px-4'>
      <div className='w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-17'>
        
        <h1 className='text-3xl font-bold text-center text-white mb-6 tracking-wide'>
          🔐 Password Generator
        </h1>

        <div className='flex overflow-hidden rounded-xl shadow-md mb-6 border border-white/20'>
          <input
            type='text'
            value={password}
            className='w-full px-4 py-3 bg-white/90 text-gray-800 outline-none text-lg font-medium'
            placeholder='Your password will appear here'
            readOnly
          />
          <button
            onClick={copyPassword}
            className='bg-pink-500 hover:bg-pink-600 text-white px-5 font-semibold transition-all duration-300'
          >
            Copy
          </button>
        </div>

        <div className='space-y-5'>
          
          <div>
            <div className='flex justify-between items-center mb-2'>
              <label className='text-white font-medium'>Password Length</label>
              <span className='text-pink-400 font-bold text-lg'>{length}</span>
            </div>

            <input
              type='range'
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='w-full cursor-pointer accent-pink-500'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <label className='flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-white cursor-pointer hover:bg-white/20 transition'>
              <input
                type='checkbox'
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className='accent-pink-500 w-4 h-4'
              />
              Numbers
            </label>

            <label className='flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-white cursor-pointer hover:bg-white/20 transition'>
              <input
                type='checkbox'
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className='accent-pink-500 w-4 h-4'
              />
              Special Characters
            </label>
          </div>

          <button
            onClick={generatePassword}
            className='w-full relative overflow-hidden bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] active:scale-[0.98]'
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App