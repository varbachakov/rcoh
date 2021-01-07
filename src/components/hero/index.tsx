import styles from './styles';
import HeroText from '@/src/components/hero/text';
import HeroView from '@/src/components/hero/view';

function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <HeroText/>
          <HeroView/>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </section>
  );
}

export default Hero;
