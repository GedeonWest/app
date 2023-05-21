import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/context/CartContext';
import Head from 'next/head';
// import { CartContextProvider } from '@/components/CartContext';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Проект по Next js</title>
    </Head>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
