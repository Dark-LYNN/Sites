import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React, { useEffect } from 'react';

interface MyNextData {
  page: {
    pathname: string;
    // other properties here
  };
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  
  render() {
    const page = this.props.__NEXT_DATA__.page;
    const pathname = typeof page === 'string' ? page : '/';
    const title = `Allure | ${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`;
    const is404Page = pathname === '/404';
    const isHomePage = pathname === '/';

  
    return (
      <Html>
        <Head>
            {/* Dev Credit */}
            <script src='https://cdn.lynnux.xyz/assets/Sparkle.js' async/>

            <meta name="author" content="LynnuxDev"/>

            {/* Main */}
            {isHomePage && (
                <title>Allure | Home</title>
            )}
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            {/* Browser walking */}
            <meta name="description" content="Allure Art Commissions.&#10;Allure your local artist. <3" />

            {/* Embeding */}
            <meta property="og:site_name" content="https://localhost:3000/" />
            <meta property="og:title" content="Allure | Commisions page" />
            <meta property="og:type" content="website" />
            <meta name="theme-color" content="#CB00FF"/>
            <meta property="og:description" content="Allure Art Commissions.&#10;Allure your local artist. <3" />
            <meta property="og:image" content="/liaallure.png"/>
            <meta property="og:image:secure_url" content="/liaallure.png"/>

            {/* Favicon */}
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

            {/* 404.tsx Only */}
            {is404Page && (
                <link rel="stylesheet" href="https://akira.lynnux.xyz/assets/css/style.css" />
            )}

            {/* Other common meta tags, title, etc. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
    
  }
}

export default MyDocument;
