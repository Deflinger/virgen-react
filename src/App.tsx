import { ReactNode } from 'react'
import './App.css'

interface Props{
    children: ReactNode;
}
function App({children}:Props) {
 return (
    <>
    <p>
        NavBar
    </p>
    {children}
    <p>
        footer
    </p>
    </>
 )
}

export default App
