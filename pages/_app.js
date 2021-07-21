import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background: `#fff url("data:image/svg+xml,%3Csvg width='1280' height='710' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='%2310B981' fill-rule='evenodd'%3E %3Cpath d='M0 63.354c47.677-2.931 102.14 12.343 163.387 45.822 91.87 50.22 126.954 158.927 248.81 226.016 121.856 67.09 217.644 28.645 324.582 86.582C843.72 479.71 882.997 594 979.392 646.458c64.263 34.971 130.87 56.185 199.821 63.641H0V63.354z'/%3E %3Cpath d='M0 1.393C50.612-3.2 109.835 13.082 177.667 50.234c101.749 55.73 130.439 163.5 265.397 237.95 134.958 74.45 204.648 26.67 323.085 90.963 118.436 64.293 142.832 176.85 249.59 235.062 71.173 38.808 167.927 70.771 290.261 95.89H0V1.393z' opacity='.7'/%3E %3C/g%3E %3C/svg%3E") left bottom/100% no-repeat fixed;`,
      }}
    >
      <Head>
        <title>Next Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
