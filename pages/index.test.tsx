import { render } from '@testing-library/react';
import Index from './index';

describe('testing Index page', () => {
  test('should render success', () => {

    render(<Index />);
  });
});
