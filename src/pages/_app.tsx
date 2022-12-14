// ./src/pages/app.tsx
import { FC } from 'react';
import { AppProps } from 'next/app';
import '../client/styles/styles.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
