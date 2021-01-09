import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useDebounce, useOutsideClick } from '@/src/hooks';
import { getSearchList } from '@/src/utils/getSearchList';
import { PropsType, ReturnTypes } from './types';

export function useSearch({ handleInputActive, hooks, isInputActive }: PropsType): ReturnTypes {
  const inputRef = useRef({} as HTMLInputElement);
  const [value, setValue] = useState('');
  const [debounceValue] = useDebounce({ value: value.trim(), delay: 500 });
  const searchList = useMemo(() => getSearchList(debounceValue, hooks), [hooks, debounceValue]);

  useOutsideClick({ elementRef: inputRef, closed: handleInputActive, isOpen: isInputActive });

  const handleChange = (event: ChangeEvent<{value: string}>): void => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!isInputActive) {
      setValue('');
      return;
    }

    inputRef.current.focus();
  }, [isInputActive]);

  return [{ value, searchList, inputRef }, handleChange];
}
