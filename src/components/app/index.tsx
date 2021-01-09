import Layout from '@/src/components/layout';
import Hero from '@/src/components/hero';
import Title from '@/src/components/title';
// import Product from '@/src/components/product';
import { PropsTypes } from './types';
import dynamic from 'next/dynamic';
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/src/components/product'),
  { ssr: false }
);
function App(props: PropsTypes): JSX.Element {
  return (
    <Layout>
      <main>
        <Hero/>
        <Title/>
        <DynamicComponentWithNoSSR {...props}/>
      </main>
    </Layout>
  );
}

export default App;
