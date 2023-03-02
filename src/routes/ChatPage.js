import { useEffect } from 'react';
import ReactGA from 'react-ga';
import ColorMenu from '../components/ColorMenu/ColorMenu';
import Title from '../components/Text/Title/Title';
import Chat from '../components/Experiments/Chat/Chat';
import Info from '../components/Button/Info/Info';
import Credits from '../components/Button/Credits/Credits';
import BackButton from '../components/Button/BackButton/BackButton';

const ChatPage = () => {
  // Google Analytics
  useEffect(() => {
    const trackingId = 'UA-230093327-1';
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/chat');
  }, []);

  // set body background to page color
  useEffect(() => {
    document.body.classList.add('black');
    return () => {
      document.body.classList.remove('black');
    };
  }, []);

  return (
    <div className='chat experiment'>
      <header>
        <ColorMenu />
        <Title
          title='How to organize online?'
          surtitle='chat'
          fontColor='white'
        />
      </header>
      <main>
        <Chat />
      </main>
      <footer>
        <div className='footer__row'>
          <Info color='black'>
            Click through the different tabs and answer the questions. Or just
            post something into the chat. First enter your name into the input
            then press submit. Next you can enter and send a message. Please
            also take a look at the community guidelines in the last tab – or
            suggest amendments.
          </Info>
          <Credits color='black'>
            Thanks to{' '}
            <a
              href='https://levelup.gitconnected.com/lets-build-a-firebase-chat-app-using-vanilla-javascript-4baf877d9f49'
              target='_blank'
              rel='noreferrer'
            >
              Victoria Lo’s Firebase Chat App Tutorial.
            </a>
          </Credits>
        </div>
        <BackButton color='pink' />
      </footer>
    </div>
  );
};

export default ChatPage;
