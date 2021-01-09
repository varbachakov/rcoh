import styles from './styles';
import { useRef, useEffect, useState, useMemo } from 'react';
import { Search } from '@/src/assets/svg-inline';
import { useDebounce, useOutsideClick } from '@/src/hooks';
import HeaderList from '@/src/components/header/header-list';
import { PropsType } from './types';

function HeaderSearch({ isInputActive, handleInputActive, hooks, handleOpenModal }: PropsType): JSX.Element {
  const [value, setValue] = useState('');
  const inputRef = useRef({} as HTMLInputElement);
  const [debounceValue] = useDebounce({ value: value.trim(), delay: 500 });
  const headerList = useMemo(() => debounceValue.length < 4 ? [] : hooks.filter(hook => hook.hookName.indexOf(debounceValue) !== -1), [hooks, debounceValue]);
  useOutsideClick({ elementRef: inputRef, closed: handleInputActive, isOpen: isInputActive });

  useEffect(() => {
    if (!isInputActive) {
      setValue('');
      return;
    }

    inputRef.current.focus();
  }, [isInputActive]);

  return (
    <div className={isInputActive ? 'header-search header-search--active' : 'header-search'} ref={inputRef}>
      <span className="header-search__normal">
        <input
          type="text"
          placeholder="Поиск"
          className="header-search__control"
          value={value}
          onFocus={handleInputActive}
          onChange={(event) => setValue(event.target.value)}
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
      <button type="button" className="header-search__button" onClick={handleInputActive} aria-label="search">
        <Search/>
      </button>
      {value && headerList.length !== 0 && <HeaderList list={headerList} handleOpenModal={handleOpenModal}/>}

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeaderSearch;
