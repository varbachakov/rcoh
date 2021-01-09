import styles from './styles';
import { GITHUB_URL } from '@/src/constants/url';
import { GitHub } from '@/src/assets/svg-inline';

function FooterCopyright():JSX.Element {
  return (
    <div className="footer-copyright">
      <a href={GITHUB_URL} className="footer-copyright__git" rel="noopener noreferrer" target="_blank" aria-label="go to github">
        <GitHub/>
      </a>
      <div className="footer-copyright__text">Copyright © {new Date().getFullYear()} Valeriy Arbachakov. All rights reserved.</div>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default FooterCopyright;
