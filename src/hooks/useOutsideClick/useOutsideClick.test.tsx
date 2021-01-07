import { createRef } from 'react';
import { render, createEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useOutsideClick } from './index';

describe('testing useOutsideClick custom hook', () => {
  const elementRef: any = createRef();
  const event: any = createEvent('click', document);

  render(<div ref={elementRef}/>);

  test('should success update isOpen variable', () => {
    let isOpen = true;
    const closed = () => {(isOpen = false);};
    const { result } = renderHook(() => useOutsideClick({ elementRef, isOpen, closed }));

    act(() => {
      result.current.handleClickOutside(event);
    });

    expect(isOpen).toBe(false);
  });

  test('should not update isOpen variable', () => {
    let isOpen = false;
    const closed = () => {(isOpen = true);};
    const { result } = renderHook(() => useOutsideClick({ elementRef, isOpen, closed }));

    act(() => {
      result.current.handleClickOutside(event);
    });

    expect(isOpen).toBe(false);
  });
});
