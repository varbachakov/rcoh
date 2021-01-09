import styles from './styles';
import { colors } from '@/src/assets/styles';
import { CheckSvg, CopySvg } from '@/src/assets/svg-inline';
import { useCopy } from '@/src/hooks';
import { PropsTypes } from './types';

function Copy({ text, theme }: PropsTypes): JSX.Element {
  const [copy, setCopy] = useCopy({ text });

  return (
    <button className={copy ? "copy copy--active" : "copy"} type="button" onClick={() => setCopy(true)}>
      {copy ? <CheckSvg/> : <CopySvg/>}

      <style jsx>
        {styles}
      </style>
      <style jsx>{`
        .copy {
          color: ${theme === 'white' ? colors.white.one : colors.dark.one};
        }
     `}</style>
    </button>
  );
}

export default Copy;
