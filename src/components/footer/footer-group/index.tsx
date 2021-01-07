import styles from './styles';
import List from '../footer-list';
import { PropsTypes } from './types';

function FooterGroup({ list, text }: PropsTypes): JSX.Element {
  return (
    <div className="footer-group">
      <h5 className="footer-group__title">{text}</h5>
      <List list={list}/>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default FooterGroup;
