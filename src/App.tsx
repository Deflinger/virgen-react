import './App.css'
import { AppForm, Button, ColorRed } from './components/Index';


function App() {
 const handleClick = () =>{
  console.log("Me haz Clicado?")
 }
 const dimeHola= () => {
    alert("Hola !!")
 }
 const submit = ()=> {
   console.log("Submitted")
 }
 return (
  <>
    <Button parentMethod={handleClick}>
     My Button Standard
    </Button>
    <ColorRed><Button parentMethod={dimeHola}>
     My Red Button
    </Button></ColorRed>
    <AppForm>
      <Button type ="submit" onClick={submit}/>
    </AppForm>
  </>
  
 )
}

export default App
