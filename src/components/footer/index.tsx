import styles from './styles';
import FooterContributing from '@/src/components/footer/FooterContributing';
import FooterCopyright from '@/src/components/footer/FooterCopyright';
import FooterGroup from '@/src/components/footer/FooterGroup';
import dataLinksFooter from '@/src/data/footer.json'

function Footer():JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <FooterContributing/>
          <FooterGroup list={dataLinksFooter.tech} text="Technology stack"/>
          <FooterGroup list={dataLinksFooter.projects} text="Projects"/>
          <FooterGroup list={dataLinksFooter.contacts} text="Contacts"/>
        </div>
        <FooterCopyright/>
      </div>

      <style jsx>
        {styles}
      </style>
    </footer>
  )
}

export default Footer
