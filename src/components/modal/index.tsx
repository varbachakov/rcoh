import dynamic from 'next/dynamic';
import ModalLoading from '@/src/components/modal/loading';
const ModalDynamicNoSSR = dynamic(
  () => import('./dynamic'),
  { ssr: false, loading: () => <ModalLoading/> }
);
import { PropsTypes } from './types';

function Modal(props: PropsTypes): JSX.Element {
  if (!props.isModalOpen) return <></>;

  return <ModalDynamicNoSSR {...props}/>;
}

export default Modal;
