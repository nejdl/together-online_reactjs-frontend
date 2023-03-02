import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ColorMenu from '../components/ColorMenu/ColorMenu';
import Title from '../components/Text/Title/Title';
import Editorial from '../components/Experiments/Editorial/Editorial';
import Info from '../components/Button/Info/Info';
import Credits from '../components/Button/Credits/Credits';
import BackButton from '../components/Button/BackButton/BackButton';

const EditorialPage = () => {
  // Google Analytics
  useEffect(() => {
    const trackingId = 'UA-230093327-1';
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/editorial');
  }, []);

  // set body background to page color
  useEffect(() => {
    document.body.classList.add('pink');
    return () => {
      document.body.classList.remove('pink');
    };
  }, []);

  return (
    <div className='editorial experiment'>
      <header>
        <ColorMenu />
        <Title
          title='How to be together online?'
          surtitle='editorial'
          fontColor='black'
        />
      </header>
      <main>
        <Editorial />
      </main>
      <footer>
        <div className='footer__row'>
          <Info color='pink'>
            You have to be together online with 2 people or more on this site to
            see the full content.
          </Info>
          {/* <Credits color='pink'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Credits> */}
        </div>
        <BackButton color='green' />
      </footer>
    </div>
  );
};

export default EditorialPage;
