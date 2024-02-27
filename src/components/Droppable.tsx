import React from 'react';
import '../App.css';

const Droppable = () => {

    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => 
    {
        event.preventDefault();
    };

    const drag = (event: React.DragEvent<HTMLElement>) => 
    {
        event.dataTransfer.setData('text', event.currentTarget.id);
    };

    const drop = (event: React.DragEvent<HTMLDivElement>) => 
    {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        console.log(data)
        const draggedElement = document.getElementById(data);
        const target = event.target as HTMLElement;

        if (draggedElement && target.classList.contains('block')) 
        {
            target.appendChild(draggedElement);
        }
        else
        {
            event.currentTarget.appendChild(document.getElementById(data)!);
        }
    };

    return (
        <div className="main">
            <div id="div1" onDrop={drop} onDragOver={allowDrop}>
                <div className="container" id="column1" draggable onDragStart={drag}>
                    <div className="block">Block 1</div>
                    <div className="block">Block 2</div>
                    <div className="block">Block 3</div>
                </div>

                <button id="drag1" draggable onDragStart={drag}>
                    Button 1
                </button>
                <button id="drag2" draggable onDragStart={drag}>
                    Button 2
                </button>

                <button id="drag3" draggable onDragStart={drag}>
                    Button 3
                </button>
            </div>
            <div id="div2" onDrop={drop} onDragOver={allowDrop}>

            </div>
        </div>
    );
};

export default Droppable;
