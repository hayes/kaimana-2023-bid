import '../styles/index.scss';
import '@uppy/core/dist/style.css';
import '@uppy/progress-bar/dist/style.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import client from '../lib/apollo-client';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
