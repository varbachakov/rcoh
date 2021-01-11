import styles from './styles';
import { SearchSvg, ClosedSvg } from '@/src/assets/svg-inline';
import { useSearch } from '@/src/hooks';
import HeaderList from '@/src/components/header/header-list';
import { PropsType } from './types';

function HeaderSearch({ hooks, handleOpenModal, isModalOpen }: PropsType): JSX.Element {
  const [state, { handleChange, handleClear }] = useSearch({ hooks, isModalOpen });

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
          value={state.value}
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
      {state.value && <button type="button" className="header-search__clear" onClick={handleClear} aria-label="clear"><ClosedSvg/></button>}
      {state.value && state.searchList.length !== 0 && <HeaderList list={state.searchList} handleOpenModal={handleOpenModal}/>}

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeaderSearch;
