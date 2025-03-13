import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Index'


function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count)=> count + 1)
  }

  return (
    <>
        <Button 
          label= {`count is ${count}`} 
          parentMethod={countMore}
        />
    </>
  )
}

export default App
