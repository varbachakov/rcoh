import styles from './styles'
import { GitHub } from '@/src/assets/svg-inline'
import { GITHUB_URL } from '@/src/constants/url'

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__mode">
          <span className="header__logo">RCOH</span>
          <a href={GITHUB_URL} className="header__git" rel="noopener noreferrer" target="_blank">
            <GitHub/>
          </a>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </header>
  )
}

export default Header
