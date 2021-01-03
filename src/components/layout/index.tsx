import styles from './styles';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
import { PropsTypes } from './types'

function Layout({ children }:PropsTypes): JSX.Element {
  return (
    <div className="layout">
      <div className="layout__header" data-testid="layout-header">
        <Header/>
      </div>
      <div className="layout__body" data-testid="layout-body">
        {children}
        <div className="layout__footer" data-testid="layout-footer">
          <Footer/>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </div>
  )
}

export default Layout
