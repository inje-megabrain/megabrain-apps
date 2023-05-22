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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
