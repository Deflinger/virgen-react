import { useRef, useState } from "react"

/* 
El useRef permite la accion de cambiar algo en el codigo sin activar un evento que 
desencadene un Re-render
Al no causar un Re-render entonces no es apreciable en la vista del usuario
Es util si se desea guardar una Variable, pero no mostrarla en el FrontEnd
*/
export const BookReader = () =>{
    const currentPageRef = useRef<number>(1)
    const [currentPage,setCurrentPage] = useState(1)

    const nextPageRef = () => {
        currentPageRef.current += 1;
        console.log(`Avanzaste a la pagina ${currentPageRef.current}`)
    }
    const prevPageRef = () => {
        if (currentPageRef.current === 1 ){
            console.log(`No puedes regresar a una página anterior a la numero ${currentPageRef.current}}`)
            return;
        }
        currentPageRef.current -= 1;
        console.log(`Retrocediste a la pagina ${currentPageRef.current}`)
    }
    const goToPage = (page: number) => {
        if(page < 1){
            console.log("No puedes saltar a una pagina Imposible");
            return
        }
        currentPageRef.current = page;
        console.log(`Te haz desplazado a la pagina ${currentPageRef.current}`)
    }
    const Forzarstado = (page : number) =>{
        if(page < 1){
            console.log("No puedes saltar a una pagina Imposible");
            return
        }
        currentPageRef.current = page;
        setCurrentPage(page)
        console.log("activaste un Re-render")
    }
    return (
        <div>
            <h2>Lectura de Libro</h2>
            <p>Pagina actual: {currentPageRef.current}</p>
            <p>Pagina actual [State]:{currentPage}</p>
            <button onClick={prevPageRef}>Pagina anterior</button>
            <button onClick={nextPageRef}>Pagina siguiente</button>
            <button onClick={() => goToPage(50)}>Ir a la pagina 50</button>
            <button onClick={() =>Forzarstado(50)}>Activar Re-render</button>
        </div>
    )
}