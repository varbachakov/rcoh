import Layout from '@/src/components/layout';
import Hero from '@/src/components/hero';
import Title from '@/src/components/title';
import Product from '@/src/components/product';
import { PropsTypes } from './types';

function App(props: PropsTypes): JSX.Element {
  return (
    <Layout>
      <main>
        <Hero/>
        <Title/>
        <Product {...props}/>
      </main>
    </Layout>
  );
}

export default App;
