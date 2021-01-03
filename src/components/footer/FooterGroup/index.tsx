import List from '@/src/components/list';
import { PropsTypes } from './types'

function FooterGroup({ list, text }: PropsTypes): JSX.Element {
  return (
    <div className="footer-group">
      <h5 className="footer-group__title">{text}</h5>
      <List list={list}/>
    </div>
  )
}

export default FooterGroup