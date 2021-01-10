import { useLayoutEffect } from 'react';

export function useScrollFreeze(): void {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, []);
}
