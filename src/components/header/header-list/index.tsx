import dynamic from 'next/dynamic';
const HeaderListDynamicNoSSR = dynamic(
  () => import('./dynamic'),
  { ssr: false }
);
import { PropsTypes } from './types';

function HeaderList(props: PropsTypes): JSX.Element {
  if (!props.value || !props.list.length) return <></>;

  return <HeaderListDynamicNoSSR {...props}/>;
}

export default HeaderList;
