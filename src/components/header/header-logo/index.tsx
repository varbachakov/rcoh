import styles from './styles';

type PropsTypes = {
  isInputActive: boolean
}

function HeaderLogo({ isInputActive }: PropsTypes ):JSX.Element {
  return (
    <span className={isInputActive ? 'logo logo--search' : 'logo'}>
      <img src='/images/logo.svg' alt='logo' />

      <style jsx>
        {styles}
      </style>
    </span>
  );
}

export default HeaderLogo;
