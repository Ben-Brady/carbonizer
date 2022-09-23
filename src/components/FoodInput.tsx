import useCarbonUsage from "hooks/carbonHook";
import React, { useRef, } from "react"

export default function FoodInput({ addFoodUsage }) {
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
            <span>Food Usage</span>
            <div>
                <label>Organic food (Percentage)</label>
                <select>
                    <option></option>
                </select>
            </div>
            <div>
                <label>Diary Amount (Percentage)</label>
                <input type="number" defaultValue={0}/>
            </div>
            <div>
                <label>Locally Producted (Percentage)</label>
                <input type="number" defaultValue={0}/>
            </div>
            <button onClick={addTravelCallback}>Add Travel</button>
        </div>
    )
}
