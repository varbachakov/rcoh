import styles from './styles';
import { useHomeState } from '@/src/state/home-wrapper';
import HeaderLogo from './header-logo';
import HeaderSearch from './header-search';
import HeaderSignIn from './header-signin';
import HeaderAuth from './header-auth';
import { PropsTypes } from './types';

function Header({ hooks }: PropsTypes): JSX.Element {
  const { isModalOpen, handleOpenModal } = useHomeState();

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
          <div className="header__signin">
            <HeaderSignIn/>
            <HeaderAuth/>
          </div>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </header>
  );
}

export default Header;
