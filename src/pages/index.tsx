import React, { useRef, useState } from "react";
import HeadInfo from "components/HeadInfo";
import FootprintDisplay from "components/FootprintDisplay";
import CarbonInput from "components/CarbonInput";
import useCarbonUsage from "hooks/carbonHook";
import styled from "styled-components";

export default function Footprint() {
    let { usage, addTravel, addUsage, addFood, addHouseUsage } = useCarbonUsage();

    return (
        <>
            <HeadInfo path="/" />
            <Container>
                <FootprintDisplay usage={usage}/>
                <CarbonInput {...{addTravel, addFood, addHouseUsage}} />
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 12rem 1fr;
    
`
