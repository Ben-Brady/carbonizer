import useCarbonUsage from "hooks/carbonHook";
import React, { useRef, } from "react"

export default function TravelInput({ addTravel, addUsage}) {
    
    let methodRef = useRef();
    let distanceRef = useRef();


    function addTravelCallback() {
        if (!distanceRef.current || !methodRef.current) return;
        
        let method = methodRef.current.value;
        let distance = Number(distanceRef.current.value);
        addTravel(distance, method)
    }
    
    return (
        <div>
            <input type="number" ref={distanceRef} defaultValue={0}/>
            <select ref={methodRef}>
                <option value="car">Car</option>
                <option value="plane">Plane</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
            </select>
            <button onClick={addTravelCallback}>Add Travel</button>
        </div>
    )
}