import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ColorMenu from '../components/ColorMenu/ColorMenu';
import Title from '../components/Text/Title/Title';
import Grid from '../components/Experiments/Shapes/Grid';
import Info from '../components/Button/Info/Info';
import Credits from '../components/Button/Credits/Credits';
import BackButton from '../components/Button/BackButton/BackButton';
import '../styles/Experiments/Shapes/Shapes.css';

const ShapesPage = () => {
  // Google Analytics
  useEffect(() => {
    const trackingId = 'UA-230093327-1';
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/shapes');
  }, []);

  // set body background to page color
  useEffect(() => {
    document.body.classList.add('purple');
    return () => {
      document.body.classList.remove('purple');
    };
  }, []);

  return (
    <div className='shapes experiment'>
      <header>
        <ColorMenu />
        <Title
          title='What shapes do we take digitally?'
          surtitle='collective drawing'
          fontColor='green'
        />
      </header>
      <main>
        <Grid />
      </main>
      <footer>
        <div className='footer__row'>
          <Info color='purple'>
            Click on the squares to change their shapes. Everything you shape
            will be visible by others who are online and vice versa. Are you
            working together or against each other while creating a pattern?
          </Info>
          {/* <Credits color='purple'>
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

export default ShapesPage;
