import React, { useState } from "react";
import titleCase from "ap-style-title-case";
import HeadInfo from "components/HeadInfo";
import styled from "styled-components";

export default function Index() {
    return (
        <>
            <title>Footprint</title>
            <HeadInfo title="About" path="/about" />
            <TextContent>
                <Title>
                    Carabonizor
                </Title>
                Carbonizor's purpose is to help make a difference ot the world's climate problem by allowing users to calculate their total carbon footprint based on actions they take and can control such as what type of transport they choose to use on a day to day business. This would be used with the intent of helping the users identify the larger issue that faces the earth with individuals carbon footprint and can convince them to make subtle changes to their lifestyle to help better the footprint in unison with many other users at once. 
            </TextContent>
        </>
    )
}

const Title = styled.h1`
font-size: 3rem;

`
const TextContent = styled.div`
    text-align: center;
    width: 100%
    
`