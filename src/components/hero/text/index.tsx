import styles from './styles';
import { GITHUB_RCOH_URL } from '@/src/constants/url';

function HeroText(): JSX.Element {
  return (
    <div className="hero-text">
      <h1 className="hero-text__title">React Custom Hook</h1>
      <a href={GITHUB_RCOH_URL} className="hero-text__link" rel="noopener noreferrer" target="_blank">Will you add your React Custom Hook to&nbsp;the RCOH project?</a>
      <p className="hero-text__desc">A&nbsp;custom Hook is&nbsp;a&nbsp;JavaScript function whose name starts with &laquo;use&raquo; and that may call other Hooks.</p>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeroText;
