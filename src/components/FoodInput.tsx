import useCarbonUsage from "hooks/carbonHook";
import React, { useRef, } from "react"

export default function FoodInput({ addFoodUsage }) {
    let organicRef = useRef();
    let dairyRef = useRef();
    let localRef = useRef();


    function addFoodCallback() {
        if (!organicRef.current ||
            !dairyRef.current ||
            !localRef.current
        ) return
        
        let organicPercentage = organicRef.current.value;
        let dairyPercentage = dairyRef.current.value;
        let localPercentage = localRef.current.value;
        addFoodUsage(organicPercentage, dairyPercentage, localPercentage)
    }

    const PercentageOptions = <>
        <option value="0">0%</option>
        <option value="1">25%</option>
        <option value="2">50%</option>
        <option value="3">75%</option>
        <option value="4">100%</option>
    </>
    
    return (
        <div>
            <span>Food Usage</span>
            <div>
                <label>Organic food (Percentage)</label>
                <select>
                    {PercentageOptions}
                </select>
            </div>
            <div>
                <label>Diary Amount (Percentage)</label>
                <select>
                    {PercentageOptions}
                </select>
            </div>
            <div>
                <label>Locally Producted (Percentage)</label>
                <select>
                    {PercentageOptions}
                </select>
            </div>
            <button onClick={addFoodCallback}>Add Travel</button>
        </div>
    )
}
