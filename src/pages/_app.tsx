import React from "react";
import NavigationBar from "components/NavigationBar";
import "styles/globals.css";
import "styles/theme.css";
import "styles/Lato.css";


export default function App({ Component, pageProps }) {
    return (
        <>
            <NavigationBar/>
            <Component {...pageProps} />
        </>
    );
}
