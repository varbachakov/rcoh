import styles from './styled';
import { useSession, signOut } from 'next-auth/client';
import { PropsTypes } from './types';

function Menu({ isOpen }:PropsTypes): JSX.Element {
  const [session] = useSession();

  if (!isOpen) return <></>;

  return (
    <div className="menu">
      <div className="menu__content">
        <div aria-label="Update profile" className="menu__profile">
          <div className="menu__avatar">
            <img src={session?.user?.image as string} alt={session?.user?.name as string} width="60" height="60"/>
          </div>
          <span className="menu__name">{session?.user?.name}</span>
        </div>
        <div className="menu__action">
          <button type="button" onClick={() => signOut()}>
            <span className="menu__out">Sign out</span>
          </button>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
      <style jsx>{`
        .menu {
          height: ${isOpen ? 'min-content' : '0'};
        }
      `}</style>
    </div>
  );
}

export default Menu;
