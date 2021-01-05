import { useState, useCallback, SyntheticEvent } from 'react';
import styles from './styles';
import HeaderLogo from './header-logo';
import HeaderSearch from './header-search';
import HeaderGithub from './header-github';

function Header(): JSX.Element {
  const [isInputActive, setActive] = useState(false);

  const handleInputActive = useCallback((event: SyntheticEvent) => {
    if ((event.target as HTMLInputElement).name === 'search' && isInputActive) return;

    setActive(!isInputActive);
  }, [isInputActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__mode">
          <HeaderLogo isInputActive={isInputActive}/>
          <HeaderSearch isInputActive={isInputActive} handleInputActive={handleInputActive}/>
          <HeaderGithub isInputActive={isInputActive}/>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </header>
  );
}

export default Header;
