import { useState } from 'react';
import ChatTab from './Tabs/ChatTab';
import Q1 from './Tabs/Q1';
import Q2 from './Tabs/Q2';
import Q3 from './Tabs/Q3';
import Q4 from './Tabs/Q4';
import Q5 from './Tabs/Q5';
import Q6 from './Tabs/Q6';
import TabButton from './TabButton/TabButton.js';
import '../../../styles/Experiments/Chat/Chat.css';

const Chat = () => {
  // USERNAME
  // set username here to save when switching between sidebar displays
  const [username, setUsername] = useState('');
  // show submit user message only after username is submitted
  const [showSubmitUserMessage, setShowSubmitUserMessage] = useState(false);

  const [selectedTab, setSelectedTab] = useState('chat');

  const toggleSelectedTab = (section) => {
    if (selectedTab !== section) {
      setSelectedTab(section);
    } else {
      setSelectedTab('chat');
    }
  };

  const displaySelectedTab = () => {
    switch (selectedTab) {
      case 'chat':
        return (
          <ChatTab
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      case '1':
        return (
          <Q1
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      case '2':
        return (
          <Q2
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      case '3':
        return (
          <Q3
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      case '4':
        return (
          <Q4
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      case '5':
        return (
          <Q5
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      case 'CG':
        return (
          <Q6
            showSubmitUserMessage={showSubmitUserMessage}
            setShowSubmitUserMessage={setShowSubmitUserMessage}
            username={username}
            setUsername={setUsername}
          />
        );
      // case 'about':
      //     return <About toggleSelectedTab={toggleSelectedTab} />;
      default:
        return <div>Coming soon</div>;
    }
  };

  return (
    <div className='ChatWindow'>
      <div className='buttonContainer'>
        <TabButton
          title='chat'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        <TabButton
          title='1'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        <TabButton
          title='2'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        <TabButton
          title='3'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        <TabButton
          title='4'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        <TabButton
          title='5'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
        <TabButton
          title='CG'
          position='top'
          selectedTab={selectedTab}
          toggleSelectedTab={toggleSelectedTab}
        />
      </div>

      {displaySelectedTab()}
    </div>
  );
};

export default Chat;
