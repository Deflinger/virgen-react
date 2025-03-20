import { useMemo, useState } from "react";

/*
El hook useMemo se utiliza para memorizar el resultado de una funcion y poder utilizarla sin 
causar un re-render
*/

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () =>{
    const [items,setItems] = useState<Item[]>([
        {
            id: 1 ,name:"Manzana", price: 1.5
        },
        {
            id: 2 ,name:"Pera", price: 2.0
        },
        {
            id: 3 ,name:"Leche", price: 1.0
        }
    ]);
    const [discount,setDiscount] = useState<number>(0);
    const TotalCost = useMemo(() => 
        items.reduce((total, item)=> total + item.price,0) 
        , [items] )
    
    const finalCost = useMemo(() => TotalCost - discount,[TotalCost,discount]);

    const addItem = () =>{
        const newItem = {
            id: items.length - 1,
            name: `Producto ${items.length - 1}`,
            price: Math.random() * 5
        }
        setItems([...items,newItem])
    }

    return(
        <div>
            <h2>lista de compras</h2>

            <ul>
                {
                    items.map(Item => (
                        
                        <li key={Item.id}>
                            {Item.name}:${Item.price.toFixed(2)}
                        </li>
                        ))
                }
            </ul>
            <p>Costo Total: ${TotalCost.toFixed(2)}</p>
            <p>
                Descuento:
                <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />
            </p>
            <p>Costo Fina: ${finalCost.toFixed(2)}</p>
            
            <button onClick={addItem}>Agregar Producto</button>
        </div>
    )
}