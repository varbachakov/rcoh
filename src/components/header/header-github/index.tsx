import styles from './styles';
import { GITHUB_URL } from '@/src/constants/url';
import { GitHub } from '@/src/assets/svg-inline';

type PropsTypes = {
  isInputActive: boolean
}

function HeaderGithub({ isInputActive }: PropsTypes): JSX.Element {
  return (
    <a href={GITHUB_URL} className={isInputActive ? 'git git--search' : 'git'} rel="noopener noreferrer" target="_blank" aria-label="go to github">
      <GitHub/>

      <style jsx>
        {styles}
      </style>
    </a>
  );
}

export default HeaderGithub;
