import styles from './styles';
import { PropsTypes } from './types';

function FooterList({ list }:PropsTypes): JSX.Element {
  return (
    <ul className="footer-list">
      {list.map((item, idx) => (
        <li key={`List_${item}_${idx}`} className="footer-list__item">
          <a href={item.href} className="footer-list__link" rel="noopener noreferrer" target="_blank" data-testid="link-href">
            <div className="footer-list__text">{item.text}</div>
          </a>
        </li>
      ))}

      <style jsx>
        {styles}
      </style>
    </ul>
  );
}

export default FooterList;
