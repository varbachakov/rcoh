import { ChangeEvent, useMemo, useState, useEffect } from 'react';
import { useDebounce } from '@/src/hooks';
import { getSearchList } from '@/src/utils/getSearchList';
import { PropsType, ReturnTypes } from './types';

export function useSearch({ hooks, isModalOpen }: PropsType): ReturnTypes {
  const [value, setValue] = useState('');
  const [debounceValue] = useDebounce({ value, delay: 500 });
  const searchList = useMemo(() => getSearchList(debounceValue, hooks), [hooks, debounceValue]);
  const handleClear = (): void => setValue('');
  const handleChange = (event: ChangeEvent<{value: string}>): void => setValue(event.target.value);

  useEffect(() => {
    if (!isModalOpen) return;

    setValue('');
  }, [isModalOpen]);

  return [{ value, searchList }, { handleChange, handleClear }];
}
