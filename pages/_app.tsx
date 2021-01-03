import { container, fontFace, globalStyles, normalize } from '@/src/assets/styles';
import type { AppProps } from 'next/app';

function RCOH({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
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
