import styles from './styles';

function HeaderLogo():JSX.Element {
  return (
    <span className='logo'>
      <img src='/images/logo.svg' alt='logo' />

      <style jsx>
        {styles}
      </style>
    </span>
  );
}

export default HeaderLogo;
