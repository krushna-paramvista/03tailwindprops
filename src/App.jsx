import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-cyan-500 text-black p-10 rounded-xl mb-4'>Tailwind</h1>
      < Card username="gauri" btntext="Visit me"/>
      < Card username="damini" btntext="Click me "/>
    </>
  )
}

export default App
