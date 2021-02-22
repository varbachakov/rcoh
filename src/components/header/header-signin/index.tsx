import styles from './styles';
import { signIn, useSession } from 'next-auth/client';
import { GitHub } from '@/src/assets/svg-inline';

function HeaderSignIn(): JSX.Element {
  const [session, loading] = useSession();

  if (loading || session) return <></>;

  return (
    <button className="git" aria-label="go to github" onClick={() => signIn('github')}>
      Sign&nbsp;in
      <GitHub/>

      <style jsx>
        {styles}
      </style>
    </button>
  );
}

export default HeaderSignIn;
