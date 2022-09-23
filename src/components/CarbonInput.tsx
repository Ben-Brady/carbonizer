import React, {} from "react"
import TravelInput from "components/TravelInput";
import HouseInput from "components/HouseInput";
import FoodInput from "components/FoodInput";
import styled from "styled-components";

export default function CarbonInput({ addTravel, addHouseUsage, addFood }) {
    return (
        <Contianer>
            <TravelInput addTravel={addTravel} />
            <HouseInput addHouseUsage={addHouseUsage} />
            {/* Can't Get To Work */}
            {/* <FoodInput addFoodUsage={addFood} /> */}
        </Contianer>
    )
}

const Contianer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    /* Input Should be Standardised, but this is enough for a prototype */
    & > div{
        height: fit-content;
        width: 20rem;
        padding: .5rem;

        display: flex;
        flex-flow: nowrap column;
        gap: .2rem;

        border: .4rem solid var(--BACKGROUND-4);
        background: var(--BACKGROUND-2);
        border-radius: 2rem;
        text-align: center;

        @media (max-width: 1200px){
            width: calc(30vw - 2rem);
        }
    }

    & > div > span{
        font-size: 1.3rem;
    }

    & > div > div{
        display: grid;
        grid-template-columns: 1fr 5rem;
        
        @media (max-width: 1200px){
            grid-template-columns: 1fr 2rem;
        }
    }
`;