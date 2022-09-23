import React, {} from "react"
import TravelInput from "components/TravelInput";
import HouseInput from "components/HouseInput";
import FoodInput from "components/FoodInput";
import styled from "styled-components";

export default function CarbonInput({ addTravel, addUsage }) {
    return (
        <Contianer>
            <TravelInput {...{ addTravel, addUsage }} />
            <HouseInput {...{ addTravel, addUsage }} />
            <FoodInput {...{ addTravel, addUsage }} />
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
        border: .4rem solid black;
        padding: .5rem;
        border-radius: 2rem;
        text-align: center;

        display: flex;
        flex-flow: nowrap column;
        justify-content: center;
        gap: .2rem;

    }
    & > div > span{
        font-size: 1.3rem;
    }

    & > div > div{
        display: grid;
        grid-template-columns: 7rem 1fr;
    }
`;