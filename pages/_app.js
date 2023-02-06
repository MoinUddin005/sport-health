import Bestfullbody from '@/components/bestfullbody';
import GetStarted from '@/components/getStarted';
import Gettime from '@/components/Gettime';
import Healthyinside from '@/components/Healthyinside';
import Layout from '@/components/Layout';
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        
      </Layout>
    </>
  );
}
