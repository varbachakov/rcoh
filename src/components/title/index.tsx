import styles from './styles';

function Title():JSX.Element {
  return (
    <section className="title">
      <h1 className="title__text">Hooks</h1>

      <style jsx>
        {styles}
      </style>
    </section>
  );
}

export default Title;
