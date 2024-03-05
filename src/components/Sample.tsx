import { useState } from "react";
import '../App.css';

const Sample=()=>
{
    const [widgets, setWidgets]=useState<HTMLElement[]>([]);

    const handleDragStart=(event:React.DragEvent, widgetType:string)=>
    {
        console.log(widgetType)
        event.dataTransfer.setData("widgetType",event.currentTarget.id);
    }

    const handleDrop=(event:React.DragEvent)=>
    {
        const widgetType=event.dataTransfer.getData("widgetType");
        const element=document.getElementById(widgetType);
        if(element)
            setWidgets([...widgets,element]);
        console.log(widgets)
    }

    const handleDragOver=(event:React.DragEvent)=>
    {
        event.preventDefault();
    }

    return(
        <div className="app">
            <div className="container">
                <div id="1" draggable onDragStart={(e)=>handleDragStart(e,"Div")}>
                    Div
                </div>
                <button id="2" draggable onDragStart={(e)=>handleDragStart(e,"Button A")}>
                    Button A
                </button>

            </div>

            <div className="containers" onDrop={handleDrop} onDragOver={handleDragOver}>
                {widgets.map((widget, index)=>
                {
                    return(
                        <>
                            {widget}
                        </>
                    )
                })}
            </div>

        </div>
    )
}


export default Sample;