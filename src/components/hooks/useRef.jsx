import { useEffect, useRef, useState } from "react"

function Counter(){
    const [count,setCount]=useState(0);
    let val = useRef(0);

    function handleIncrement(){
        val.current = val.current+1;
        console.log("value of val: ",val.current);
        setCount(count+1);
    }

    //it runs on every render
    useEffect(()=>{
        console.log("main ferse render hogya hu")
    })
    return(
        <div>
            <button onClick={handleIncrement()}>Increment</button>
            <br />

            <div>
                Count: {count}
            </div>
        </div>
    )
}

export default Counter