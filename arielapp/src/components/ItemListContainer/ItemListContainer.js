import React from "react";
import ItemCount from "../ItemCount/ItemCount";


export const ItemListContainer = (quantity) =>{
    const onAdd = (quantity) => {
        console.log ("${quantity}");
    
    }

    return (
        <ItemCount initial={1} stock={10} onAdd={onAdd}></ItemCount>
    )
}
export default ItemListContainer;