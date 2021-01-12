import styles from './styles';
import { SearchSvg, ClosedSvg } from '@/src/assets/svg-inline';
import { useSearch } from '@/src/hooks';
import HeaderList from '@/src/components/header/header-list';
import { PropsType } from './types';

function HeaderSearch({ hooks, handleOpenModal, isModalOpen }: PropsType): JSX.Element {
  const [{ value, searchList }, { handleChange, handleClear }] = useSearch({ hooks, isModalOpen });

  return (
    <div className="header-search">
      <span className="header-search__search" aria-label="search">
        <SearchSvg/>
      </span>
      <span className="header-search__normal">
        <input
          type="text"
          placeholder="Поиск"
          className="header-search__control"
          value={value}
          onChange={handleChange}
          name="search"
          autoFocus={true}
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
          aria-label="search"
        />
        <span className="header-search__box"/>
      </span>
      {value && <button type="button" className="header-search__clear" onClick={handleClear} aria-label="clear"><ClosedSvg/></button>}
      <HeaderList value={value} list={searchList} handleOpenModal={handleOpenModal}/>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeaderSearch;
