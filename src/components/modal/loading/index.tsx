import styles from './styles';
import { Loader } from '@/src/assets/svg-inline';

function ModalLoading():JSX.Element {
  return (
    <div className="modal-loading">
      <div className="modal-loading__content">
        <Loader/>
      </div>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default ModalLoading;
