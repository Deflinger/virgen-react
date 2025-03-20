import { memo, useCallback, useState } from "react";


/* 
El hook useCallback es utilizado para memorizar funciones sin la necesidad de causar re-render 
en los hijos de la funcion memorizada
Se utiliza cuando un proceso puede llegar a costarle demasiados Recursos en su implementacion
para asi ahorrar los recursos que gastaria la memoria renderizando
*/
interface Contact{
    id:number;
    name:string;
    phone:string;
}

interface ContactProps {
    contact:Contact,
    onCall:(phone:string) => void
}


const ContactCard =memo(({contact,onCall}:ContactProps)=>{
    console.log(`Renderizando contacto ${contact.name}`)

    return(
        <div>
            <h3>{contact.name}</h3>
            <p>Telefono:{contact.phone}</p>
            <button onClick={()=> onCall(contact.name)}>Llamar</button>
        </div>
    )
})

export const PhoneBook =()=>{
    const [contacts,setContacts]= useState<Contact[]>([
        {
            id: 1 ,name:"Manzana", phone: "158-215-5811"
        },
        {
            id: 2 ,name:"Pera", phone: "158-215-5812"
        },
        {
            id: 3 ,name:"Leche", phone: "158-215-5813"
        }
    ]);
    const[log,setLog] = useState<string>('')

    const makeCall = useCallback((phone:string)=> setLog(`Llamando al numero ${phone}`),[])

    const addContact =()=>{
        const newContact = {
            id: contacts.length + 1,
            name: `Contacto ${contacts.length + 1 }`,
            phone: `${Math.floor(1000000000 + Math.random() * 5)}`
        }

        setContacts([...contacts, newContact])
    }
    return(
        <div>
            <h2>Agenda de Contacto</h2>
            {contacts.map(contacts=>(
                <ContactCard key={contacts.id} contact={contacts} onCall={makeCall}/>
            ))}
            <button onClick={addContact}>Agregar Contacto</button>
            <p>{log}</p>
        </div>
    )
}