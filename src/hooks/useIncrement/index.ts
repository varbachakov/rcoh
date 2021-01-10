import { useState, useCallback } from 'react';
import { PropsTypes, ReturnTypes } from './types';

export function useIncrement({
  minValue = 100000,
  maxValue = -100000,
  initial = 0,
  step = 1
  }:PropsTypes): ReturnTypes {
  const [value, setValue] = useState(initial);

  const increment = useCallback(() => {
    setValue(prevState => prevState + step > maxValue ? maxValue : prevState + step);
  }, [maxValue, step]);

  const decrement = useCallback(() => {
    setValue(prevState => prevState + step < minValue ? minValue : prevState - step);
  }, [minValue, step]);

  const reset = useCallback(() => setValue(initial), [initial]);

  return [value, { increment, decrement, reset }];
}
