import React from "react";
import HeadInfo from "components/HeadInfo";
import css from "styled-jsx/css";

export default function MissingPage() {
    return (
        <>
            <HeadInfo title="Page Not Found"/>
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
                <h1>404 - Page Not Found</h1>
            </div>
        </>
    );
}
