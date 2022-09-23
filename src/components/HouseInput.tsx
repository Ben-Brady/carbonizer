import useCarbonUsage from "hooks/carbonHook";
import React, { useRef, } from "react"
import styled from "styled-components";

export default function TravelInput({ addHouseUsage }) {
    let occupantRef = useRef();
    let energyRef = useRef();
    let gasRef = useRef();


    function addTravelCallback() {
        if (
            !occupantRef.current ||
            !energyRef.current || 
            !gasRef.current) return;
        
        let occupants: number = occupantRef.current.value;
        let energyUsage: number = energyRef.current.value;
        let gasUsage: number = gasRef.current.value;
        addHouseUsage(occupants, energyUsage, gasUsage)
    }
    
    return (
        <div>
            <span>
                Home Usage
            </span>
            <div>
                <label >Occupants: </label>
                <input type="number" ref={occupantRef} defaultValue="2" min="0"/>
            </div>
            <div>
                <label >Energy Usage (KWh): </label>
                <input type="number" ref={energyRef} defaultValue="0" min="0"/>
            </div>
            <div>
                <label >Gas Usage (KWh): </label>
                <input type="number" ref={gasRef} defaultValue="0" min="0"/>
            </div>
            <button onClick={addTravelCallback}>Calculate</button>
        </div>
    )
}