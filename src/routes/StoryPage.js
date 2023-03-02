import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ColorMenu from '../components/ColorMenu/ColorMenu';
import Title from '../components/Text/Title/Title';
import Story from '../components/Experiments/Story/Story';
import Info from '../components/Button/Info/Info';
import Credits from '../components/Button/Credits/Credits';
import BackButton from '../components/Button/BackButton/BackButton';

const StoryPage = () => {
  // Google Analytics
  useEffect(() => {
    const trackingId = 'UA-230093327-1';
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/story');
  }, []);

  useEffect(() => {
    // set body background to page color
    document.body.classList.add('green');
    return () => {
      document.body.classList.remove('green');
    };
    // // disable scroll on body to prevent scrollbar on mobile
    // document.body.classList.add('no-scroll');
    // return () => {
    //   document.body.classList.remove('no-scroll');
    // };
  }, []);

  return (
    <div className='story experiment'>
      <header>
        <ColorMenu />
        <Title
          title='What can’t be done alone?'
          surtitle='collaborative writing'
          fontColor='black'
        />
      </header>
      <main>
        <Story />
      </main>
      <footer>
        <div className='footer__row'>
          <Info color='green'>
            Who says how much in the digital space? According to a{' '}
            <a
              href='https://www.forbes.com/sites/forbesbusinesscouncil/2020/07/10/how-to-leverage-the-1-9-90-rule-and-become-a-leader-on-linkedin/'
              target='blank'
            >
              Forbes
            </a>{' '}
            article, only 1% of users post and create content. 9% share, like
            and comment on content. 90% only view content. How does this
            imbalance affect online communities and how to balance this out?
            <br />
            <br />
            Submit a word to the collective story. You can only submit one word.
            If you’ve submitted a word, you have to wait an hour until you can
            submit the next word. A word can contain punctuation marks but no
            spaces. The maximum character length is 50.
          </Info>
          <Credits color='green'>
            This is an online version of the writing workshop{' '}
            <i>One Word per Person</i> by Ton Vuletić,{' '}
            <a href='https://janegbers.info/' target='blank'>
              Jan Egbers
            </a>{' '}
            and{' '}
            <a href='https://lethihoai.net/' target='blank'>
              Lê Thị Hoài
            </a>
            .
          </Credits>
        </div>
        <BackButton color='black' />
      </footer>
    </div>
  );
};

export default StoryPage;
