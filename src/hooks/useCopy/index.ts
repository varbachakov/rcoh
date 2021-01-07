import { useState, useEffect } from 'react';
import { PropsTypes, ReturnTypes } from './types';

export function useCopy({ text, initCopy }: PropsTypes): ReturnTypes {
  const [copy, setCopy] = useState(initCopy || false);

  useEffect(() => {
    if (!copy) return;

    navigator.clipboard && navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopy(false);
    }, 800);
  }, [copy, text]);

  return [copy, setCopy];
}
