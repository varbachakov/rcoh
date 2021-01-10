import styles from './styles';
import { Search } from '@/src/assets/svg-inline';
import { useSearch } from '@/src/hooks';
import HeaderList from '@/src/components/header/header-list';
import { PropsType } from './types';

function HeaderSearch({ isInputActive, handleInputActive, hooks, handleOpenModal }: PropsType): JSX.Element {
  const [state, handleChange] = useSearch({ handleInputActive, hooks, isInputActive });

  return (
    <div className={isInputActive ? 'header-search header-search--active' : 'header-search'} ref={state.inputRef}>
      <span className="header-search__normal">
        <input
          type="text"
          placeholder="Поиск"
          className="header-search__control"
          value={state.value}
          onFocus={handleInputActive}
          onChange={handleChange}
          name="search"
          autoFocus={isInputActive}
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
        />
        <span className="header-search__box"/>
      </span>
      <button type="button" className="header-search__button" onClick={handleInputActive} aria-label="search">
        <Search/>
      </button>
      {state.value && state.searchList.length !== 0 && <HeaderList list={state.searchList} handleOpenModal={handleOpenModal}/>}

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeaderSearch;
