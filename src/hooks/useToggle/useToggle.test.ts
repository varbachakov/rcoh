import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './index';

describe('testing useToggle custom hook', () => {
  test('should success update isToggle variable', () => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeTruthy();
  });
});
