import styles from './styles';

type PropsTypes = {
  isInputActive: boolean
}

function HeaderLogo({ isInputActive }: PropsTypes ):JSX.Element {
  return (
    <span className={isInputActive ? 'logo logo--search' : 'logo'}>
      RCOH

      <style jsx>
        {styles}
      </style>
    </span>
  );
}

export default HeaderLogo;
