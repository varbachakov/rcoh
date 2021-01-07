import { SyntheticEvent, useCallback, useEffect } from 'react';
import { PropsTypes, ReturnTypes } from './types';

export function useOutsideClick({ elementRef, closed, isOpen }: PropsTypes): ReturnTypes {
  const handleClickOutside = useCallback((event: Event | SyntheticEvent): void => {
    isOpen && elementRef.current && !elementRef.current.contains(event.target as Node) && closed(event as SyntheticEvent);
  },[isOpen, elementRef, closed]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { handleClickOutside };
}
