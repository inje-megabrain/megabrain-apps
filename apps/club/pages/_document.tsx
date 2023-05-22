import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@megabrain/ui/styles';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
