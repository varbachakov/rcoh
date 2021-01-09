import Document, { Html, Head, Main, NextScript } from 'next/document';

class RCOHDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RCOHDocument;
