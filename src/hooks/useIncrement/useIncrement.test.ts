import { renderHook, act } from '@testing-library/react-hooks';
import { useIncrement } from './index';

describe('testing useIncrement custom hook', () => {
  test('should success update count at increment, decrement and  reset', () => {
    const { result } = renderHook(() => useIncrement({ minValue: -5, maxValue: 2, initial: 1, step: 1 }));

    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1].increment();
    });
    expect(result.current[0]).toBe(2);

    act(() => {
      result.current[1].decrement();
    });
    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1].increment();
    });
    act(() => {
      result.current[1].increment();
    });
    expect(result.current[0]).toBe(2);

    act(() => {
      result.current[1].reset();
    });
    expect(result.current[0]).toBe(1);
  });
});
