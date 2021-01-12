import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('testing component List', () => {
  test('should check correct props children and className', () => {
    const hooks = [{ hookCode: "lorem10", hookName: "useCookies.mdx" }];

    render(
      <Layout hooks={hooks}>
        <div data-testid="layout-children">layout-children</div>
      </Layout>
    );

    expect(screen.getByTestId('layout-children')).toHaveTextContent('layout-children');
    expect(screen.getByTestId('layout-header')).toHaveClass('layout__header');
    expect(screen.getByTestId('layout-body')).toHaveClass('layout__body');
    expect(screen.getByTestId('layout-footer')).toHaveClass('layout__footer');
  });
});
