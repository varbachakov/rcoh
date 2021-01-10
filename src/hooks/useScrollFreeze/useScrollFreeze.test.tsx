import { renderHook } from '@testing-library/react-hooks';
import { useScrollFreeze } from './index';

describe('testing useScrollFreeze custom hook', () => {
  test('should success update style body overflow: hidden', () => {
    renderHook(() => useScrollFreeze());

    expect(document.body).toHaveStyle('overflow: hidden');
  });
});
