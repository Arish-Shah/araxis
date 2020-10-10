import Head from 'next/head';
import Navbar from './navbar';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} />
      </Head>
      <Navbar />
      <header>{children}</header>
    </>
  );
}

export default Layout;
