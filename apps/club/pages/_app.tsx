import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import '@megabrain/toolkit-notion';

export default function App({ Component, pageProps }: AppProps) {
  defineMegabrainCore({
    WAKA_BASE_URL: process.env.NEXT_PUBLIC_WAKA_API_ENDPOINT!,
  });
  defineMegabrainNotionToolkit({
    SECRET_KEY: process.env.NEXT_PUBLIC_NOTION_SECRET!,
    WORKSPACE: process.env.NEXT_PUBLIC_NOTION_WORKSPACE!,
  });

  return <Component {...pageProps} />;
}
