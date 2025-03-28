import { useEffect, useState } from 'react';
import './App.css'
import { getCharacter,} from './services/api.services'
import { Character, emptyCharacter } from './components/models';




function App() {
    const [data , setData] = useState<Character>({} as emptyCharacter);

const fetchCharacter = async () => {
    const result = await getCharacter(1);
    setData(result.data)
}
useEffect(()=> {
    fetchCharacter()
    
},[])
 return ( 
  <>
    {JSON.stringify(data)}
    {data}
  </>
 )
}

export default App
