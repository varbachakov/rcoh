import { renderHook, act } from '@testing-library/react-hooks';
import { useHover } from './index';

describe('testing useHover custom hook', () => {
  test('should success update isHover variable', () => {
    const { result } = renderHook(() => useHover());

    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1].onMouseOver();
    });

    expect(result.current[0]).toBeTruthy();

    act(() => {
      result.current[1].onMouseLeave();
    });

    expect(result.current[0]).toBeFalsy();
  });
});
