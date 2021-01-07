import styles from './styles';
import { CheckSvg, CopySvg } from '@/src/assets/svg-inline';
import { useCopy } from '@/src/hooks';
import { PropsTypes } from './types';

function Copy({ text }: PropsTypes): JSX.Element {
  const [copy, setCopy] = useCopy({ text });

  return (
    <button className={copy ? "copy copy--active" : "copy"} type="button" onClick={() => setCopy(true)}>
      {copy ? <CheckSvg/> : <CopySvg/>}

      <style jsx>
        {styles}
      </style>
    </button>
  );
}

export default Copy;
