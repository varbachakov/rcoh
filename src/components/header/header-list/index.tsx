import styles from './styles';
import { PropsType } from './types';

function HeaderList({ list, handleOpenModal }: PropsType): JSX.Element {
  return(
    <ul className="header-list">
      {list.map((item, idx) => (
        <li key={`HeaderList__${idx}__${item.hookName}`} className="header-list__item" onClick={handleOpenModal} data-hookname={item.hookName}>
          <div className="header-list__text">{item.hookName.replace(/.mdx/,'')}</div>
        </li>
      ))}

        <style jsx>
            {styles}
        </style>
    </ul>
  );
}

export default HeaderList;
