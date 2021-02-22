import Head from 'next/head';
import { container, fontFace, globalStyles, normalize } from '@/src/assets/styles';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

function RCOH({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="keywords" content="react react-hooks custom-hooks react-custom-hooks"/>
        <meta name="description" content="RCOH — this is the platform where popular react hooks, react-hook, hooks, hook, react-hooks, custom-hooks, react-custom-hooks  are collected"/>
        <meta property="og:title" content="React| Hooks: react custom Hooks"/>
        <meta property="og:description" content="RCOH — this is the platform where popular react hooks, react-hook, hooks, hook, react-hooks, custom-hooks, react-custom-hooks  are collected"/>
        <meta property="og:site_name" content="rcoh"/>
        <meta property="og:url" content="https://rcoh.ru"/>
        <meta property="og:image" content="https://rcoh.ru/images/screenshot.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16"  href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32"  href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <title>React| Hooks: react custom Hooks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>

      <style jsx global>
        {fontFace}
      </style>
      <style jsx global>
        {normalize}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx global>
        {container}
      </style>
    </>
  );
}

export default RCOH;
