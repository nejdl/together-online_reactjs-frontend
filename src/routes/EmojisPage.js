import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ColorMenu from '../components/ColorMenu/ColorMenu';
import Title from '../components/Text/Title/Title';
import Emojis from '../components/Experiments/Emojis/Emojis';
import Info from '../components/Button/Info/Info';
import Credits from '../components/Button/Credits/Credits';
import BackButton from '../components/Button/BackButton/BackButton';

const EmojisPage = () => {
  // Google Analytics
  useEffect(() => {
    const trackingId = 'UA-230093327-1';
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/emojis');
  }, []);

  useEffect(() => {
    // disable scroll on body to prevent scrollbar on mobile
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className='emojis experiment'>
      <header>
        <ColorMenu />
        <Title
          title='How do we feel online?'
          surtitle='emoji reactions'
          fontColor='purple'
        />
      </header>
      <main>
        <Emojis />
      </main>
      <footer>
        <div className='footer__row'>
          <Info color='white'>
            Platform mechanisms shape the way we interact online. How do we
            express our emotions? Platforms such as Facebook, Instagram, Twitter
            or Youtube already prepared the emotions you can feel. They promote
            positive and extreme emotions. But feelings can be ambivalent. Thus
            here’s an alternative version of the emoji reaction bar. Press an
            emoji and everyone currently online will be able to see how you
            feel.
            <br />
            <a
              href='https://greatergood.berkeley.edu/article/item/how_many_different_human_emotions_are_there'
              target='_blank'
              rel='noreferrer'
            >
              How many emotions are there?
            </a>{' '}
            <a
              href='https://www.lilianstolk.com/emoji-voter/'
              target='_blank'
              rel='noreferrer'
            >
              And who decides which new emojis should be added?
            </a>
          </Info>
          <Credits color='white'>
            Emoji 3 and 5 from{' '}
            <a href='https://josuaroters.de/' target='_blank' rel='noreferrer'>
              Josua Roters
            </a>
            . Get a printed version of his stickers{' '}
            <a
              href='https://www.instagram.com/p/CZ66BBbs2l0/'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
            . Emoji 1 from{' '}
            <a href='https://emojipedia.org/melting-face/' target='blank'>
              Emojipedia
            </a>
            . <br />
            Thanks to{' '}
            <a
              href='https://github.com/DheerajMahra/emojix'
              target='_blank'
              rel='noreferrer'
            >
              Dheeraj Mahra’s floating emoji app
            </a>{' '}
            as a code starting point.
          </Credits>
        </div>
        <BackButton color='purple' />
      </footer>
    </div>
  );
};

export default EmojisPage;
