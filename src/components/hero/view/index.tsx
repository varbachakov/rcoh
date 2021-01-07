import styles from './styles';

function HeroView():JSX.Element {
  return (
    <div className="hero-view hidden-xs">
      <canvas height="345" width="620" className="hero-view__canvas"/>
      <img src='/images/hero.png' className="hero-view__img" alt='react custom hooks'/>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeroView;
