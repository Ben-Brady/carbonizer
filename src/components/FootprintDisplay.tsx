import React from "react"
import styled from "styled-components"
import FootprintModule from "components/FootprintModule"


export default function FootprintDisplay({ usage }) {
    let coal = usage * 0.75
    let oil = usage * 0.85
    let kilogramFomatter = new Intl.NumberFormat('en-US', {
        style: "unit",
        unit: "kilogram",
        maximumFractionDigits: 0,
        useGrouping: true
    });

    return (
        <Container>
            <FootprintModule title="Estimated Coal Used" value={kilogramFomatter.format(coal)}/>
            <FootprintModule title="Total Carbon Usage" value={kilogramFomatter.format(usage)}/>
            <FootprintModule title="Estiamted Oil Used" value={kilogramFomatter.format(oil)}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 2rem;

    display: flex;
    justify-content: space-around;
    align-items: baseline;
`;  