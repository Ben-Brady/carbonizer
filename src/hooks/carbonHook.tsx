import { useEffect, useState } from "react";

type TravelMethod = "car" | "train" | "bus" | "plane"
const API_URL = "https://bu-hackathon-api.herokuapp.com/api/v1/impact"

export default function useCarbonUsage() {
    let [carbonUsage, setCarbonUsage] = useState(0);

    useEffect(() => {
        let carbon = Number(JSON.parse(localStorage.getItem("carbon")))
        setCarbonUsage(carbon);
    }, [])
    
    function setUsage(usage: number) {
        localStorage.setItem("carbon", JSON.stringify(usage))
        setCarbonUsage(usage)
    }

    function addUsage(usage: number) {
        setUsage(carbonUsage + usage);
    }


    async function addTravel(distance: number, method: TravelMethod) {
        let params = new URLSearchParams();
        params.set(method + "Distance", distance.toString());
        let r = await fetch(API_URL + "/travel?" + params.toString())
        let data = await r.json();
        let emissions = data["data"]["attributes"]["total_emissions"]
        addUsage(emissions)
    }


    async function addHouse(occupants: number, energyUsage: number, gasUsage: number) {
        let params = new URLSearchParams();
        params.set("occupants", occupants.toString());
        params.set("energyUsage", energyUsage.toString());
        params.set("gasUsage", gasUsage.toString());
        let r = await fetch(API_URL + "/household?" + params.toString())
        let data = await r.json();
        let emissions = data["data"]["attributes"]["total_emissions"]
        addUsage(emissions)
    }

    async function addFood(
            organicFoodAmount: number,
            meatDairyAmount: number,
            locallyProducedAmount: number,
            wasteAmount: number,
        ) {
        let params = new URLSearchParams();
        params.set("organicFoodAmount", organicFoodAmount.toString());
        params.set("meatDairyAmount", meatDairyAmount.toString());
        params.set("locallyProducedAmount", locallyProducedAmount.toString());
        params.set("wasteAmount", wasteAmount.toString());
        let r = await fetch(API_URL + "/impact/travel?" + params.toString())
        let data = await r.json();
        let emissions = data["data"]["attributes"]["total_emissions"]
        addUsage(emissions)
    }

    return { usage: carbonUsage, addUsage, addTravel, addFood, addHouse};
}