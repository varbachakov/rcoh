import { render, screen } from '@testing-library/react'
import Layout from './index'

describe('testing component List', () => {
  test('should check correct props children and className', () => {
    render(
      <Layout>
        <div data-testid="layout-children">layout-children</div>
      </Layout>
    )

    expect(screen.getByTestId('layout-children')).toHaveTextContent('layout-children')
    expect(screen.getByTestId('layout-header')).toHaveClass('layout__header')
    expect(screen.getByTestId('layout-body')).toHaveClass('layout__body')
    expect(screen.getByTestId('layout-footer')).toHaveClass('layout__footer')
  })
})
