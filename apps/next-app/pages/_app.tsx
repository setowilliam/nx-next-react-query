import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
