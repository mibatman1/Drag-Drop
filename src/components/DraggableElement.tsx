import { useState } from 'react';
import '../index.css';

const DraggableElement=()=>
{
  const [isElementDropped, setIsElementDropped] = useState(false);
  const handleDragStart = (event: React.DragEvent<HTMLElement>) => 
  {
    const target = event.target as HTMLElement;
    if(target) 
    {
      target.classList.add('dragging');
    }
  }

  const handleDragEnd = (event: React.DragEvent<HTMLElement>) => 
  {
    const target = event.target as HTMLElement;
    if (target) 
    {
      target.classList.remove('dragging');
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => 
  {
    event.preventDefault();
    // const container = event.currentTarget;
    // const afterElement = getDragAfterElement(container, event.clientY);
    // //console.log(afterElement)
    // const draggable = document.querySelector('.dragging') as HTMLElement;
    // const cloned=draggable.cloneNode(true) as HTMLElement;
    // if(afterElement===null) 
    // {
    //   container.appendChild(draggable);
    // } 
    // else 
    // {
    //   container.insertBefore(draggable, afterElement);
    // }
    // cloned.classList.remove('dragging')
  }

  const getDragAfterElement = (container: HTMLDivElement, y: number): HTMLElement => 
  {
    const draggableElements = Array.from(container.querySelectorAll('.draggable:not(.dragging)'));
    return draggableElements.reduce<{ offset: number, element: HTMLElement | null }>((closest, child) => 
    {
      const box=(child as HTMLElement).getBoundingClientRect();
      console.log(box)
      const offset=y-box.top-box.height/2;
      if (offset < 0 && offset > closest.offset) 
      {
        return { offset: offset, element: child as HTMLElement };
      } 
      else 
      {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY, element:null}).element!;
  }

  const handleDrop=(event:React.DragEvent<HTMLDivElement>)=>
  {
    console.log(event)
    const container = event.currentTarget;
    const afterElement = getDragAfterElement(container, event.clientY);
    const draggable = document.querySelector('.dragging') as HTMLElement;
    const cloned=draggable.cloneNode(true) as HTMLElement;
    cloned.addEventListener('dragstart',()=>
    {
      cloned.classList.add('dragging')
    });
    cloned.addEventListener('dragend',()=>
    {
      cloned.classList.remove('dragging')
    });
    if(afterElement===null) 
    {
      container.appendChild(cloned);
    } 
    else 
    {
      container.insertBefore(cloned, afterElement);
    }
    cloned.classList.remove('dragging')
  }

  return (
    <div className="main">
      <div className="container" onDragOver={handleDragOver}>
        <p className="draggable" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>1</p>
        <p className="draggable" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>2</p>
        <button className="draggable" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>Button 1</button>
        <img className='draggable' src='https://reactjs.org/logo-og.png' height='40px' alt='React Image' draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}/>
      </div>
      <div className="containers" onDragOver={handleDragOver} onDrop={handleDrop}>

      </div>
    </div>
  );
}

export default DraggableElement;