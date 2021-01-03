import styles from './styles';
import { PropsTypes } from './types'

function List({ list }:PropsTypes): JSX.Element {
  return (
    <ul className="list">
      {list.map((item, idx) => (
        <li key={`List_${item}_${idx}`} className="list__item">
          <a href={item.href} className="list__link" rel="noopener noreferrer" target="_blank" data-testid="link-href">
            <div className="list__text">{item.text}</div>
          </a>
        </li>
      ))}

      <style jsx>
        {styles}
      </style>
    </ul>
  )
}

export default List
