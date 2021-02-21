import { useState, useEffect } from 'react';
import { PropsTypes, ReturnTypes } from './types';

export function useCopy({ text, initCopy }: PropsTypes): ReturnTypes {
  const [copy, setCopy] = useState(initCopy || false);

  useEffect(() => {
    if (!copy) return;

    navigator.clipboard && navigator.clipboard.writeText(text);
    const clearTime = setTimeout(() => {
      setCopy(false);
    }, 800);

    return () => {
      clearTimeout(clearTime);
    };
  }, [copy, text]);

  return [copy, setCopy];
}
