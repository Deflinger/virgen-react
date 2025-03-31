import './App.css'
import { getCharacter,} from './services/api.service'
import { Character,} from './components/models';
import { useApi } from './hooks/useApi';

function App() {
/*const [data , setData] = useState<Character>(emptyCharacter);

const fetchCharacter = async () => {
    const result = await getCharacter();
    setData(result.data)
}
useEffect(()=> {
    fetchCharacter()
    
},[])
*/

const {loading, error, data, fetch} = useApi<Character,number>(getCharacter,{autoFetch:true,params:1})
//const {loading, error, data, fetch} = useApi<Character,number>(getCharacter)
if(loading){
    return (<p>Cargando</p>)
}
if(error){
    return(<p>Ups {error.message}</p>)
}

 return ( 
  <>
    {JSON.stringify(data)}
    <button onClick={()=> fetch(2)}></button>
  </>
 )
}

export default App
