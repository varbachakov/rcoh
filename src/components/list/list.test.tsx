import { render, screen } from '@testing-library/react';
import List from './index';

describe('testing component List', () => {
  test('should update props success', () => {
    const listOne = [{ "text": "RCOH ONE", "href": "https://test-one.com" }];
    const listTwo = [{ "text": "RCOH TWO", "href": "https://test-two.com" }];

    const { rerender } = render(<List list={listOne} />);
    expect(screen.getByText('RCOH ONE'));
    expect(screen.getByTestId('link-href')).toHaveProperty('href', 'https://test-one.com/');

    rerender(<List list={listTwo}/>);
    expect(screen.getByText('RCOH TWO'));
    expect(screen.getByTestId('link-href')).toHaveProperty('href', 'https://test-two.com/');
  });

  test('should check correct attribute to link', () => {
    const list = [{ "text": "RCOH ONE", "href": "https://test-one.com" }];

    render(<List list={list} />);
    expect(screen.getByRole('link')).toHaveProperty('rel', 'noopener noreferrer');
    expect(screen.getByRole('link')).toHaveProperty('target', '_blank');
  });
});
