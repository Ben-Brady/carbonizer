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
    @media (max-width: 600px){
        font-size: 1.5rem;
    }
    `

const Value = styled.span`
    font-size: 1.4rem;
    @media (max-width: 600px){
        font-size: 1.2rem;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    text-align: center;
`