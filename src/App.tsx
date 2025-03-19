import './App.css'
import { AppForm, Button, ColorRed } from './components/Index';
import { GlobalProvider } from './context/global.provider';



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
  <GlobalProvider>

     <ColorRed><Button parentMethod={dimeHola}>
     My Red Button
    </Button></ColorRed>

    <Button parentMethod={handleClick}>
     My Button Standard
    </Button>
   
    <AppForm>
      <Button type ="submit" onClick={submit}/>
    </AppForm>
  </GlobalProvider>
  
 )
}

export default App
