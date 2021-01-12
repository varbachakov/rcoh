import { renderHook } from '@testing-library/react-hooks';
import { useDebounce } from './index';

describe('testing useDebounce custom hook', () => {
  test('should correct return debouncedValue', async () => {
    const { result } = renderHook(() => useDebounce({ value: 'test', delay: 500 }));

    expect(result.current[0]).toBe('test');
  });
});
