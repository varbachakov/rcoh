import { useState, useMemo } from 'react';
import { ReturnTypes } from './types';

export function useHover(): ReturnTypes {
  const [isHover, setHover] = useState(false);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setHover(true),
      onMouseLeave: () => setHover(false)
    };
  }, []);

  return [isHover, bind];
}
