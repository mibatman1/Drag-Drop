import React from "react"

const Button=()=>
{
    const handleDragStart=(event:React.DragEvent<HTMLDivElement>)=>
    {
        event.dataTransfer.setData('text/plain','Button');
    }

    return(
        <div draggable onDragStart={handleDragStart}>
            Drag Me!
        </div>
    )
}


export default Button;