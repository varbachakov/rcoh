import { useWindowWidth } from '@/src/hooks';
import { ReturnTypes } from './types';

export const useIsMobile = (breakpoint: number): ReturnTypes => {
  const [width] = useWindowWidth();

  return breakpoint < width;
};
