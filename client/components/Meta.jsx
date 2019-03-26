import Head from 'next/head';
import React from 'react';

import "../scss/style.scss"

export default ({title,tagline,description}) => (
    <div>
        <Head>
            <title>{title} - {tagline}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
        </Head>
    </div>
)
