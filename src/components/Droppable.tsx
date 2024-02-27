import React from 'react';
import '../App.css';

const Droppable = () => {

    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const drag = (event: React.DragEvent<HTMLElement>) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
    };

    const drop = (event: React.DragEvent<HTMLDivElement>) => 
    {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const draggedElement = document.getElementById(data);
        console.log(draggedElement)
        const target = event.target as HTMLElement;

        if (draggedElement && target.classList.contains('block')) {
            // Clone the dragged element before appending it to the target
            const clonedElement = draggedElement.cloneNode(true) as HTMLElement;
            target.appendChild(clonedElement);
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
                    drag me1
                </button>
                <button id="drag2" draggable onDragStart={drag}>
                    drag me2
                </button>

                <button id="drag3" draggable onDragStart={drag}>
                    drag me3
                </button>
            </div>
            <div id="div2" onDrop={drop} onDragOver={allowDrop}>

            </div>
        </div>
    );
};

export default Droppable;
