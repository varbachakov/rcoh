import styles from './styles';
import { useRef } from 'react';
import { useSession } from 'next-auth/client';
import { getFirstLetters } from '@/src/utils';
import Menu from '@/src/components/menu';
import { useToggle, useOutsideClick } from '@/src/hooks';

function HeaderAuth(): JSX.Element {
  const elementRef = useRef(null);
  const [session, loading] = useSession();
  const [isToggle, toggle] = useToggle(false);
  useOutsideClick({ elementRef, closed: toggle, isOpen: isToggle });

  if (loading || !session) return <></>;

  return (
    <div className="auth" ref={elementRef}>
      <button
        className="auth__button"
        role="button"
        aria-label="View profile and account settings"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={isToggle}
        onClick={toggle}
      >
        <span className="auth__name">{getFirstLetters(session?.user?.name as string)}</span>
        <div className="auth__img">
          <img src={session?.user?.image as string} alt={session?.user?.name as string} width="40" height="40"/>
        </div>
      </button>
      <Menu isOpen={isToggle}/>

      <style jsx>
        {styles}
      </style>
    </div>

  );
}

export default HeaderAuth;
