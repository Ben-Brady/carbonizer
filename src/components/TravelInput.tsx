import useCarbonUsage from "hooks/carbonHook";
import React, { useRef, } from "react"
import styled from "styled-components";

export default function TravelInput({ addTravel }) {
    
    let methodRef = useRef();
    let distanceRef = useRef();


    function addTravelCallback() {
        if (!distanceRef.current || !methodRef.current) return;
        
        let method = methodRef.current.value;
        let distance = Number(distanceRef.current.value);
        distanceRef.current.value = 0
        methodRef.current.value = "car"
        addTravel(distance, method)
    }
    
    return (
        <div>
            <span>
                Travel Usage
            </span>
            <div>
                <label >Distance (km): </label>
                <input type="number" ref={distanceRef} defaultValue="0" min="0"/>
            </div>
            <div>
                <label>Travel Method: </label>
                <select ref={methodRef}>
                    <option value="car">Car</option>
                    <option value="plane">Plane</option>
                    <option value="bus">Bus</option>
                    <option value="train">Train</option>
                </select>
            </div>
            <button onClick={addTravelCallback}>Calculate</button>
        </div>
    )
}