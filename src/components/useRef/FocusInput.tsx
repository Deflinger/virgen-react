import { useRef } from "react"

export const FocusInput = () =>{
    const inputRef = useRef<HTMLInputElement>(null)
    const handleButtonClick= () => {
        if(!inputRef.current){
            console.log('No existe Referencia al Elemento')
            return
        }
        inputRef.current.focus()
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Escribe algo aqui ..."/>
            <button onClick={handleButtonClick}>Enfocar en el input</button>
        </div>
    )
}