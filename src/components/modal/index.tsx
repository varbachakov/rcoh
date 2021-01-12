import dynamic from 'next/dynamic';
import ModalLoading from '@/src/components/modal/loading';
const ModalDynamicNoSSR = dynamic(
  () => import('./dynamic'),
  { ssr: false, loading: () => <ModalLoading/> }
);
import { PropsTypes } from './types';
import { useHomeState } from '@/src/state/home-wrapper';

function Modal({ hooks }: PropsTypes): JSX.Element {
  const { isModalOpen, hookName, handleOpenModal } = useHomeState();

  if (!isModalOpen) return <></>;

  return <ModalDynamicNoSSR hooks={hooks} hookName={hookName} handleOpenModal={handleOpenModal}/>;
}

export default Modal;
