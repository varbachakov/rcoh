import path from 'path';
import fs from 'fs';
import App from '@/src/components/app';
import { HooksTypes, PropsTypesApp, ReturnStaticPropsTypes } from './types';

function Home(props: PropsTypesApp): JSX.Element {
  return (
    <App {...props}/>
  );
}

export function getStaticProps(): ReturnStaticPropsTypes {
  const hooksPath = path.join(process.cwd(), 'collections');
  const filenames = fs.readdirSync(hooksPath);
  const hooks = filenames.reduce((acc: HooksTypes, hookName: string) => {
    const filePath = path.join(hooksPath, hookName);
    const hookCode = fs.readFileSync(filePath, 'utf-8');

    return acc.concat({ hookName, hookCode });
  }, []);

  return { props: { hooks } };
}

export default Home;
