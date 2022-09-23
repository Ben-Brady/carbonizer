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
                <RepoLink href="https://github.com/Ben-Brady/carbonizer">
                    Repository
                </RepoLink>
                <br/>
                <Blurb>
                    Carbonizor's purpose is to help make a difference ot the world's climate problem by allowing users to calculate their total carbon footprint based on actions they take and can control such as what type of transport they choose to use on a day to day business. This would be used with the intent of helping the users identify the larger issue that faces the earth with individuals carbon footprint and can convince them to make subtle changes to their lifestyle to help better the footprint in unison with many other users at once. 
                </Blurb>
                <br/>
                <Blurb>
                Our app helps to solve these issues by providing you with a calculator where you can calculate the amount of carbon footprint used over a certain period of time. With this calculator, it helps you to see how you can reduce carbon use. It can also offer you alternatives and suggestions to change and adjust your daily lifestyle to help combat the average use of carbon.  
                </Blurb>
            </TextContent>
        </>
    )
}

const Title = styled.h1`
    font-size: 4rem;
    `

const RepoLink = styled.a`
    display: block;
    font-size: 2rem;
`

const Blurb = styled.div`
    font-size: 1.1rem;
    padding-left: 20vw;
    padding-right: 20vw;
`

const TextContent = styled.div`
    text-align: center;
    width: 100%
`