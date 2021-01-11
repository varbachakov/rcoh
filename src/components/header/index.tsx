import styles from './styles';
import Modal from '@/src/components/modal';
import { useHomeState } from '@/src/state/home-wrapper';
import HeaderLogo from './header-logo';
import HeaderSearch from './header-search';
import HeaderGithub from './header-github';
import { PropsTypes } from './types';

function Header({ hooks }: PropsTypes): JSX.Element {
  const { isModalOpen, hookName, handleOpenModal } = useHomeState();

  return (
    <header className="header">
      <div className="container">
        <div className="header__mode">
          <div className="header__logo">
            <HeaderLogo/>
          </div>
          <div className="header__search">
            <HeaderSearch hooks={hooks} isModalOpen={isModalOpen} handleOpenModal={handleOpenModal}/>
          </div>
          <div className="header__git">
            <HeaderGithub/>
          </div>
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
