import { ReactNode } from "react"
import "./Button.css"
import { useGlobalContext } from "../../context/global.context"

interface Props {
    children: ReactNode
    parentMethod: () => void,
}
interface ChildrenProps{
    children: JSX.Element
}
export const ColorRed = ({children}:ChildrenProps) =>{
    const {value} = useGlobalContext()

    return(<div className="color-red">{value}:{children}</div>)
}
export const Button = ({children, parentMethod}:Props) => {

    const {setValue} = useGlobalContext()
    const handleClick = () => {
        setValue(10)
        parentMethod()
    }
    return(
        <button 
            className={"custom-button"} 
            onClick={handleClick}>
            {children}
        </button>
    )
}