import React from "react"
import styled from "styled-components"


export default function FootprintDisplay({ title, value }) {
    return (
        <Container>
            <Header>
                {title}
            </Header>
            <Value>
                {value}
            </Value>
        </Container>
    )
}

const Header = styled.span`
    font-size: 2rem;

    @media (max-width: 1200px){
        font-size: 1.5rem;
    }
`

const Value = styled.span`
    font-size: 1.4rem;

    @media (max-width: 1200px){
        font-size: 1.2rem;
    }
`

const Container = styled.div`
    width: 20rem;
    
    @media (max-width:1200px){
        max-width: calc(30vw - 1rem);
        width: fit-content;
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    text-align: center;
    
    border: .4rem solid var(--BORDER-1);
    background: var(--BACKGROUND-3);
    border-radius: 2rem;
    padding: .5rem;
`