import React from "react";
import Head from "next/head";

const SiteName = "Carbonizer"
const SiteDescription = "A tool for measuring the carbon footrint usage"

export default function HeadInfo({
        title = "" as string,
        path,
}): JSX.Element {
    title = title ? `${SiteName} | ${title}` : SiteName

    // TODO: Add Article Tags https://ogp.me/#type_article
    return (
        <Head key="HeadInfo">
            <title>{title}</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        </Head>
    )
}