import styles from '@/src/components/header/header-list/styles';
import { PropsTypes } from './types';

function HeaderListDynamic({ list, handleOpenModal }: PropsTypes): JSX.Element {
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

export default HeaderListDynamic;
