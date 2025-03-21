import './App.css'
import { Modal } from './components/Modal/Modal'
import {  useModalContext } from './components/Modal/context/modalContext'


function App() {
    const {setState} = useModalContext()
    const openModal = ()=>{
        setState(true)
    }

 return ( 
  <>
    <Modal>
        <h2>Hola mundo</h2>
    </Modal>    
    <button onClick={openModal}>abrir el modal</button>
  </>
 )
}

export default App
