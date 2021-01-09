import Head from 'next/head';
import { container, fontFace, globalStyles, normalize } from '@/src/assets/styles';
import type { AppProps } from 'next/app';

function RCOH({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="keywords" content="react react-hooks custom-hooks react-custom-hooks"/>
        <meta name="description" content="RCOH — это платформа где собраны популярные React Custom Hooks"/>
        <meta property="og:title" content="React Custom Hooks - в одном месте собраны популярные."/>
        <meta property="og:description" content="RCOH — это платформа где собраны популярные React Custom Hooks"/>
        <title>React Custom Hooks - в одном месте собраны популярные.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />

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
