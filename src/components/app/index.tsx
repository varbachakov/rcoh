import Layout from '@/src/components/layout';
import Hero from '@/src/components/hero';
import Title from '@/src/components/title';
import Product from '@/src/components/product';
import Modal from '@/src/components/modal';
import { PropsTypes } from './types';

function App(props: PropsTypes): JSX.Element {
  return (
    <Layout {...props}>
      <main>
        <Hero/>
        <Title/>
        <Product {...props}/>
        <Modal {...props}/>
      </main>
    </Layout>
  );
}

export default App;
