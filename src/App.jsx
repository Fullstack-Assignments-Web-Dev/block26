import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/ContactList.jsx'
import ContactList from './components/ContactList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactList />
    </>
  )
}

export default App
