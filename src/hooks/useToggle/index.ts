import { useState } from 'react';
import { PropsTypes, ReturnProps } from './types';

export const useToggle = (init: PropsTypes): ReturnProps => {
  const [isToggle, setToggle] = useState(init);
  const toggle = () => setToggle(prevState => !prevState);

  return [isToggle, toggle];
};
