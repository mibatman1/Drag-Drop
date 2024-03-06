import { useEffect, useRef, useState } from "react";

const usePrevious=(value:number)=>
{
    const ref=useRef<number>();

    useEffect(()=>
    {
        //Updating the current value. 
        ref.current=value;
    },[value])//Re-running the effect whenever value changes

    //Returning the value before the update.
    return ref.current;
}

const PreviousValue=()=>
{
    // State Variable for storing the current value.
    const [count, setCount]=useState<number>(0);

    //Getting the previous value using the Custom Hook(usePrevious Hook)
    const previousValue=usePrevious(count);
    return(
        <div>
            <h1> 
                Current Value: {count},
                Previous Value: {previousValue}
            </h1>

            {/* Incrementing the value on each click */}
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}


export default PreviousValue;