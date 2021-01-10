import styles from './styles';
import { PropsTypes } from './types';
import { useScrollFreeze } from '@/src/hooks';
import ModalContent from '@/src/components/modal/content';

function ModalDynamic({ hooks, hookName, handleOpenModal }: PropsTypes):JSX.Element {
  useScrollFreeze();

  return (
    <div className="modal">
      <div className="modal__background" />
      <div className="modal__content">
        <div className="modal__container">
          <ModalContent hooks={hooks} hookName={hookName} handleOpenModal={handleOpenModal}/>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default ModalDynamic;
