import styles from './styles';

function HeroView():JSX.Element {
  return (
    <div className="hero-view hidden-flex-xs">
      <canvas height="324" width="620" className="hero-view__canvas"/>
      <img src='/images/laptop.svg' className="hero-view__img" alt='react custom hooks'/>
      <img src='/images/redactor.svg' className="hero-view__img hero-view__img--redactor" alt='react custom hooks'/>

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

export default HeroView;
