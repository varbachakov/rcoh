import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
import { PropsTypes } from './types'

function Layout({ children }:PropsTypes): JSX.Element {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header/>
      </div>
      <div className="layout__body">
        {children}
        <div className="layout__footer">
          <Footer/>
        </div>
      </div>

      <style jsx>{`
        .layout {
          height: 100vh;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          grid-template-areas: 
            'layout__header'
            'layout__body';
        }
        
        .layout__header { grid-area: layout__header; }
        .layout__body { grid-area: layout__body; }
        
        .layout__body {
          overflow: auto;
          display: grid;
          grid-template-rows: 1fr auto;
        }
      `}
      </style>
    </div>
  )
}

export default Layout
