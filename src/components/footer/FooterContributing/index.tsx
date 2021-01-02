import styles from './styles';
import { GITHUB_RCOH_URL } from '@/src/constants/url';

function FooterContributing(): JSX.Element {
  return (
    <div className="footer-contributing">
      <h2 className="footer-contributing__title">Contributing?</h2>
      <a href={GITHUB_RCOH_URL} className="footer-contributing__rcoh" rel="noopener noreferrer" target="_blank">Add custom hook</a>
      <p className="footer-contributing__description">
        Pull requests are welcomed. To&nbsp;submit your custom hook, please create a&nbsp;markdown file,
        and put it&nbsp;in&nbsp;a&nbsp;particular category of&nbsp;the collections folder.
      </p>

      <style jsx>
        {styles}
      </style>
    </div>
  )
}

export default FooterContributing
