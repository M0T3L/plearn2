import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto mt-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
