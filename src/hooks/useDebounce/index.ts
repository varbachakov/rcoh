import { useState, useEffect } from 'react';
import { PropsTypes, ReturnTypes } from './types';

export function useDebounce({ value, delay }: PropsTypes): ReturnTypes {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [delay, value]
  );

  return [debouncedValue];
}
