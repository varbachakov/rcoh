import styles from './styles';
import { useRef, useEffect } from 'react';
import { Search } from '@/src/assets/svg-inline';
import { PropsType } from './types';
import { useOutsideClick } from '@/src/hooks';

function HeaderSearch({ isInputActive, handleInputActive }: PropsType): JSX.Element {
  const inputRef = useRef({} as HTMLInputElement);
  useOutsideClick({ elementRef: inputRef, closed: handleInputActive, isOpen: isInputActive });

  useEffect(() => {
    if (!isInputActive) return;

    inputRef.current.focus();
  }, [isInputActive]);

  return (
    <div className={isInputActive ? 'header-search header-search--active' : 'header-search'}>
      <span className="header-search__normal">
        <input
          type="text"
          placeholder="Поиск"
          className="header-search__control"
          value=""
          onClick={handleInputActive}
          onChange={console.info}
          ref={inputRef}
          name="search"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
        />
        <span className="header-search__box"/>
      </span>
      <button type="button" className="header-search__button" onClick={handleInputActive}>
        <Search/>
      </button>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeaderSearch;
