import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState{
    hasError: boolean;
}

interface ErrorBoundaryProps{
    children:ReactNode
}
/*
Los errores que pueden ser atrapado por ErrorBoundary son los errores de renderizado
Es utilizado para evitar que los errores rompan la aplicacion  
*/

class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState>{
    constructor(props:ErrorBoundaryProps){
        super(props)
        this.state = {hasError:false}
    }

    static getDerivedStateFromError(error:Error): ErrorBoundaryState{
        console.log("Derived Error",error)
        return { hasError:true}
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log('Error', error)
        console.log('Error Info', errorInfo)
    }

    render() {
        if(this.state.hasError){
            return <h1>Oops! something wrong has happen :C</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;