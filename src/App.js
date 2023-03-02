import { useEffect } from 'react';
import ReactGA from 'react-ga';
import './styles/App.css';

import ColorMenu from './components/ColorMenu/ColorMenu';
import TitleGraphic from './components/TitleGraphic/TitleGraphic';
import Bubble from './components/Bubble/Bubble';
import Intro from './components/Text/Intro/Intro';
import Info from './components/Button/Info/Info';
import Credits from './components/Button/Credits/Credits';
import Imprint from './components/Button/Imprint/Imprint';

function App() {
  // Google Analytics
  useEffect(() => {
    const trackingId = process.env.TRACKING_ID;
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/');
  }, []);

  return (
    <div className="App">
      <header>
        <ColorMenu />
        <TitleGraphic />
      </header>
      <main>
        <Bubble
          title="How to be together online?"
          // surtitle='editorial'
          color="pink"
          link="/editorial"
        />
        <Bubble
          title="What shapes do we take digitally?"
          // surtitle='collective drawing'
          color="green"
          link="/shapes"
        />
        <Bubble
          title="How do we feel online?"
          // surtitle='emoji reactions'
          color="purple"
          link="/emojis"
        />
        <Bubble
          title="What can’t be done alone?"
          // surtitle='collaborative writing'
          color="white"
          link="/story"
        />
        <Bubble
          title="How to organize online?"
          // surtitle='chat'
          color="black"
          link="/chat"
        />
        <Intro>
          The internet is something that is build upon the idea of people being
          online together. In playful experiments made to use together, this
          website explores this topic and answers questions such as: How to be
          together online? What shapes do we take digitally? How do we feel
          online? What can’t be done alone?
        </Intro>
      </main>
      <footer>
        <div className="footer__row">
          <Info color="white">
            Behind each question is an experiment that explores notions of
            community in the digital space. Check the info box on a site if you
            are unsure how to interact with it.
          </Info>
          <Credits color="white">
            Thank you for the support from my tutors, classmates, coordinators
            and everyone else at the{' '}
            <a
              href="https://sandberg.nl/main-department-design"
              target="_blank"
              rel="noreferrer"
            >
              Sandberg Design Department
            </a>
            ,{' '}
            <a href="https://florianzia.com/" target="_blank" rel="noreferrer">
              Florian Zia
            </a>
            ,{' '}
            <a href="https://lenahegger.de/" target="_blank" rel="noreferrer">
              Lena Hegger
            </a>
            , friends and family. Thanks for all the resources and coding
            support from various online dev communities and
            open-source-projects. Thank you Dinamo for the typeface{' '}
            <a
              href="https://abcdinamo.com/typefaces/ginto"
              target="_blank"
              rel="noreferrer"
            >
              Ginto
            </a>
            .
          </Credits>
        </div>
        <Imprint color="pink">
          MA project at{' '}
          <a
            href="https://sandberg.nl/main-department-design"
            target="_blank"
            rel="noreferrer"
          >
            Sandberg Design Department
          </a>
          <br />
          Design &amp; Code:{' '}
          <a href="http://katharinanejdl.com/" target="_blank" rel="noreferrer">
            Katharina Nejdl
          </a>{' '}
          <br /> Typeface:{' '}
          <a
            href="https://abcdinamo.com/typefaces/ginto"
            target="_blank"
            rel="noreferrer"
          >
            Ginto by Dinamo
          </a>{' '}
          and <br />
          <a
            href="https://velvetyne.fr/fonts/tiny/"
            target="_blank"
            rel="noreferrer"
          >
            TINY 5X3 by Velvetyne (Jack Fahnestock)
          </a>
          <br />
          <br />
          CONTACT <br />
          <a
            href="mailto:katharina@nejdl.de?subject=together-online.net"
            target="_blank"
            rel="noreferrer"
          >
            katharina@nejdl.de
          </a>
          <br />
          <br />
          DSVGO <br />I am currently working on the cookie-consent form. This
          website uses Google Analytics and contains cookies from Firebase.
        </Imprint>
      </footer>
    </div>
  );
}

export default App;
