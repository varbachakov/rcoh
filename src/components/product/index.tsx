import styles from './styles';
import dynamic from 'next/dynamic';
import Copy from '@/src/components/copy';
import ProductCard from '@/src/components/product/card';
import ModalLoading from '@/src/components/modal/loading';
import { useHomeState } from '@/src/state/home-wrapper';
import { PropsTypes } from './types';
const ModalDynamicNoSSR = dynamic(
  () => import('@/src/components/modal'),
  { ssr: false, loading: () => <ModalLoading/> }
);

function Product({ hooks }: PropsTypes):JSX.Element {
  const { isModalOpen, hookName, handleOpenModal } = useHomeState();

  return (
    <section className="product">
      <div className="container">
        <ul className="product__list">
          {hooks.map((hook, idx) => (
            <li key={`Product__${idx}__${hook.hookName}`} className="product__item">
              <ProductCard hookName={hook.hookName} handleOpenModal={handleOpenModal}/>
              <Copy text="test" theme="dark"/>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && <ModalDynamicNoSSR hooks={hooks} hookName={hookName} handleOpenModal={handleOpenModal}/>}

      <style jsx>
        {styles}
      </style>
    </section>
  );
}



export default Product;
