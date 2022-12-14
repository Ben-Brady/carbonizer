import React from "react";
import HeadInfo from "components/HeadInfo";
import css from "styled-jsx/css";

export default function MissingPage() {
    return (
        <>
            <HeadInfo title="An Error Has Occured"/>
            <style jsx>{`
                h1 {
                    font-size: 5rem;
                    text-align: center;
                }
                h2 {
                    font-size: 2rem;
                    text-align: center;
                }
            `}</style>
            <div>
                <h1>500 - An Error Has Occured</h1>
            </div>
        </>
    );
}
