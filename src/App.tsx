//import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './components/hooks';
//import { Button } from './components/Index'

const url = "https://api.example.com/data";

interface Data {
  Name:string,
  lastName:string,
  age:number
}

function App() {
  //const [count, setCount] = useState(0)
  const {data,loading,error} = useFetch<Data>(url)
  if(loading){
    return <div>cargando...</div>
  }

  if (error){
    return <div>Ups! parece que hubo un error: {error.message}</div>
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
