import { render, act } from '@testing-library/react';
import Index from './index';

describe('testing Index page', () => {
  test('should render success', async () => {
    render(<Index hooks={[]}/>);

    await act(() => Promise.resolve());
  });
});
