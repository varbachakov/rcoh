import styles from './styles';
import { SyntheticEvent, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '@/src/utils/renderers';
import { replaceHookCode } from '@/src/utils/replaceHookCode';
import Copy from '@/src/components/copy';
import { useOutsideClick } from '@/src/hooks';
import { PropsTypes } from './types';

function ModalContent({ hooks, hookName, handleOpenModal }:PropsTypes):JSX.Element {
  const elementRef = useRef(null);
  const hookCode = useMemo(() => {
    const [currentHook] = hooks.filter(item => item.hookName === hookName);

    return currentHook.hookCode;
  }, [hooks, hookName]);
  const closed = (event: SyntheticEvent) => {
    if (!(event.target as HTMLDivElement).classList.contains('modal__content')) return;

    handleOpenModal(event);
  };

  useOutsideClick({ elementRef, isOpen: true, closed });

  return(
    <div className="modal-content" ref={elementRef} onClick={closed}>
        <div className="modal-content__grid">
          <ReactMarkdown renderers={renderers}>{hookCode}</ReactMarkdown>
          <div className="modal-content__copy">
            <Copy text={replaceHookCode(hookCode)} theme="white"/>
          </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default ModalContent;
