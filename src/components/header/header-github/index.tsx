import styles from './styles';
import { GITHUB_URL } from '@/src/constants/url';
import { GitHub } from '@/src/assets/svg-inline';

function HeaderGithub(): JSX.Element {
  return (
    <a href={GITHUB_URL} className="git" rel="noopener noreferrer" target="_blank" aria-label="go to github">
      <GitHub/>

      <style jsx>
        {styles}
      </style>
    </a>
  );
}

export default HeaderGithub;
