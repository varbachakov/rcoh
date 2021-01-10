import styles from './styles';
import Modal from '@/src/components/modal';
import { useState, useCallback, SyntheticEvent } from 'react';
import { useHomeState } from '@/src/state/home-wrapper';
import HeaderLogo from './header-logo';
import HeaderSearch from './header-search';
import HeaderGithub from './header-github';
import { PropsTypes } from './types';

function Header({ hooks }: PropsTypes): JSX.Element {
  const [isInputActive, setActive] = useState(false);
  const { isModalOpen, hookName, handleOpenModal } = useHomeState();

  const handleInputActive = useCallback((event: SyntheticEvent) => {
    if ((event.target as HTMLInputElement).name === 'search' && isInputActive) return;

    setActive(!isInputActive);
  }, [isInputActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__mode">
          <HeaderLogo isInputActive={isInputActive}/>
          <HeaderSearch isInputActive={isInputActive} handleInputActive={handleInputActive} hooks={hooks} handleOpenModal={handleOpenModal}/>
          <HeaderGithub isInputActive={isInputActive}/>
        </div>
      </div>
      <Modal hooks={hooks} hookName={hookName} handleOpenModal={handleOpenModal} isModalOpen={isModalOpen}/>

      <style jsx>
        {styles}
      </style>
    </header>
  );
}

export default Header;
