import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { Button } from './components/Index'


function App() {
  //const [count, setCount] = useState(0)
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const consoleLoader = (loadingValue : boolean) =>{
    setLoading (loadingValue)
    console.info(loading)
  }

  const fetchData = async () => {
    consoleLoader(true)
    try{
      const response = await fetch("https://api.example.com/data")

      if(!response.ok){
        throw new Error("Error al obtener datos")
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (err){
      setError(err as string)
    }finally{
      consoleLoader(false)
    }
  }

  useEffect(()=>{
    fetchData()
    return () => {}
  },[])

  if(loading){
    return <div>cargando...</div>
  }

  if (error){
    return <div>Ups! parece que hubo un error: {error}</div>
  }
  /*
  const countMore = () => {
    setCount((count)=> count + 1)
  }*/

  return (
   /* <>
      <Button 
          label= {`count is ${count}`} 
          parentMethod={countMore}
        />
    </>*/
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App
