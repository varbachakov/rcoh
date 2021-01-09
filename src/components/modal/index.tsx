import styles from './styles';
import ModalContent from './content';
import { PropsTypes } from './types';

function Modal({ hooks, hookName, handleOpenModal }: PropsTypes):JSX.Element {
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

export default Modal;
