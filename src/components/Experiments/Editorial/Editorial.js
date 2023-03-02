import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  createAnonymousUser,
  auth,
  createUserDocument,
  updateUserDocument,
  listOnlineUsers,
} from '../../../api/api';
import Button from '../../Button/Button';
import Intro from '../../Text/Intro/Intro';
import Article from '../../Text/Article/Article';
import Text from '../../Text/Text';
import Quote from '../../Text/Quote/Quote';
import Reference from '../../Text/Reference/Reference';
import '../../../styles/Experiments/Editorial/Editorial.css';

const Editorial = () => {
  const [userId, setUserId] = useState(null);
  const [currentlyOnline, setCurrentlyOnline] = useState(1);

  // CREATE ANONYMOUS USER
  // create anonymous user and set user id
  useEffect(() => {
    createAnonymousUser();

    // if anonymous sign is successful
    const unsubscribeAuthStateChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // set user id state
        // and create user document in db
        createUserDocument(uid);
        setUserId(uid);
      } else {
        console.error('Error: No user found.');
      }
    });

    // cleanup subscription
    return () => {
      unsubscribeAuthStateChange();
    };
  }, []);

  // UPDATE USER DOCUMENT & COUNT ONLINE USERS
  const updateTimeInMs = 1000;
  useEffect(() => {
    // update user document in db frequently
    // to prove that user is still online
    // and count current online users
    let updateInterval;
    // only after anonymous user with user id was created
    if (userId) {
      updateInterval = setInterval(() => {
        // update user document with this id to update timestamp
        updateUserDocument(userId);
        coutOnlineUsers();
      }, updateTimeInMs);
    }

    // cleanup interval
    return () => clearInterval(updateInterval);
  }, [userId]);

  // count current users online
  const coutOnlineUsers = async () => {
    const numberOfOnlineUsers = await listOnlineUsers(updateTimeInMs);

    // FIX ME: online user number is sometimes returned 0 from db
    // prevent showing 0 online users
    if (numberOfOnlineUsers > 0) {
      setCurrentlyOnline(numberOfOnlineUsers);
    } else {
      setCurrentlyOnline(1);
    }
  };

  return (
    <div>
      <Button
        title={currentlyOnline + ' online'}
        type='online-counter'
        color='green'
        noninteractive
      ></Button>
      {/* INTRO */}
      <Intro>
        The internet is something that is build upon the idea of people being
        online together. In playful experiments made to use together, this
        website explores this topic and answers questions such as: How to be
        together online? What shapes do we take digitally? How do we feel
        online? What can’t be done alone?
      </Intro>
      {/* ARTICLE 1 */}
      <Article
        title='Together Online'
        subtitle='What does it mean to be together?'
      >
        <div className='article__paragraph'>
          <Text type='article__text'>
            <i>
              <b>Togetherness [noun]:</b> the pleasant feeling of being united
              with other people in friendship and understanding.
            </i>{' '}
            <sup>[1]</sup>
          </Text>
        </div>
        <div className='article__paragraph'>
          <Text type='article__text'>
            In addition to digital communication channels and collaborative work
            tools, it is mainly online communities where digital encounters take
            place.
          </Text>
          <Text type='article__text'>
            An online community can function as an information system where
            members can post, comment on discussions, give advice or edit
            collective content. Typically, people communicate through social
            networks, chat rooms, forums, email lists. People may also join
            online communities through video games, blogs, and virtual worlds.
            Members of the community usually share common interests. They can be
            anonymous and superficial, but they can also feel like home for
            some, consisting of a “family of invisible friends”.
          </Text>
          <Text type='article__text'>
            The increasing popularity of Web 2.0 sites has facilitated real-time
            communication and contact with others, creating new opportunities
            for information exchange. However, these interactions can also lead
            to a decline in social interactions or a deposit of negative and
            derogatory forms of speaking to others, and in this context, emerged
            forms of racism, bullying, sexist comments, etc. can also be
            explored and linked to online communities.
          </Text>
          <Text type='article__text'>
            One scholarly definition of an online community is this: “a virtual
            community is defined as an aggregation of individuals […] who
            interact around a shared interest, where the interaction is at least
            partially supported or mediated by technology (or both), and guided
            by some protocols or norms“. <sup>[2]</sup>
          </Text>
        </div>
        <Reference>
          <div>
            see{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://en.wikipedia.org/wiki/Online_community'
            >
              Wikipedia: Online Community
            </a>
          </div>
          <div>
            [1]{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://dictionary.cambridge.org/dictionary/english/togetherness'
            >
              Cambridge Dictionary
            </a>
          </div>
          <div>
            [2] Constance Elise Porter,{' '}
            <i>
              A Typology of Virtual Communities: A Multi-Disciplinary Foundation
              for Future Research.
            </i>{' '}
            Journal of computer-mediated communication. Oxford University Press,
            2004.
          </div>
        </Reference>
      </Article>
      {/* ARTICLE 2 */}
      <Article
        title='LAN-party vs. Twitter-Thread'
        subtitle='With whom do I want to be online together?'
      >
        <div className='article__paragraph'>
          <Text type='article__text'>
            When I try to create connection online, I don’t want to connect all
            people. I want to create a friendly online space and keep hate and
            trolling out. Closing off spaces creates echo-chambers, but also
            much needed safe-spaces. Restricting which people can particiate in
            a community is essential for implementing rules of social behavior
            on the basis of the constitution and mutual respect. Any community
            that grows beyond a point where certain rules of interaction are no
            longer self-evident and embraced by all must address the moderation
            of its content.
          </Text>
          <Text type='article__text'>
            Moderating can be done community-led, through mechanisms like
            upvoting or downvoting, liking or reporting. It can also be done
            through guidelines agreed upon by the community, which can be
            implemented if they must by hierarchies such as admins that can
            block users, restrictions for newbies (new members), reward-systems
            for valuable contributions or reviewing processes before publishing.{' '}
          </Text>
          <Text type='article__text'>
            The smaller this community, the better the moderation works. Things
            get more difficult, when the community scales. Often big social
            networks, like Twitter, Facebook, Instagram, use automated content
            moderation, like image-recognition and word-filtering, to screen
            content for violations of the guidelines. In the end though, other
            members reporting unwanted content and finally a level of humans
            filtering out horrifying videos cannot be automated away. Depending
            on the intention of the guidelines, moderation practices may also
            implement platform or government censorship.
          </Text>
          <Text type='article__text'>
            There are also quasi-unmoderated communities like 4chan, Telegram
            channels or dark-web forums, where anonymity and a legal vacuum
            allow hateful content to be shared without consequences.{' '}
          </Text>
          <Text type='article__text'>
            Bot armies or targeted trolls try to circumvent moderation, often
            with right-wing, sexist and racist motives as part of online
            harrassment attacks or as form of misinformation campaigns.{' '}
          </Text>
          <Text type='article__text'>
            As part of moderation, access to the community can also be managed.
            Some communities are completely closed, only available on invite.
            Some frameworks allow for more independence by providing easy to
            install instances for private servers. This makes it possible to
            self-host and organize your own online community on Mastedon,
            Minecraft or Discord. There are also offline networks, like a group
            of friends connecting their computers during a LAN-party or Virtual
            Private Networks that cannot be accessed through the internet but
            through physical Wi-Fi spots.
          </Text>
          <Text type='article__text'>
            The community I try to create is maybe most like a LAN-party, but
            without the toxic masculinity and with the possibility for people to
            join in online as well. I want to build a community for friends and
            friends of friends and people who want to become friends.
          </Text>
        </div>
        <Reference>
          <div>
            see{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://geekfeminism.fandom.com/wiki/Moderation'
            >
              Geek Feminism Wiki: Moderation
            </a>
          </div>
        </Reference>
      </Article>
      {/* ARTICLE 3 */}
      <Article
        title='What Keeps Us Apart'
        subtitle='Which platform mechanisms shape the way we meet online?'
      >
        <div className='article__paragraph'>
          <Text type='article__text'>
            When we meet people online, the way we interact is shaped
            significantly by the the technology we’re using or by the mechanisms
            of the platform we are on: The medium is the message.
          </Text>
          <Text type='article__text'>
            In our digitized society more and more of our economic, social and
            interpersonal traffic is channeled by global online platform
            ecosystems driven by data and organized through algorithms. These
            platforms introduce new mechanisms to social interaction that are
            shaped by platform technologies, economic models, and user
            practices. <i>The Platform Society</i> <sup>[1]</sup> described
            three kinds of mechanisms: Datafication (referring to “the ability
            of networked platforms to render into data many aspects of the world
            that have never been quantified before”), Commodification (“concerns
            the transformation of online and offline objects, activities,
            emotions, and ideas into tradable commodities”) and Selection
            (“about the curation of most relevant topics, terms, actors,
            objects, offers, services“ – shaped through “personalization, trends
            and reputations, and moderation practices.”).
          </Text>
          <Text type='article__text'>
            Which interactions are possible is predefined by platform and
            technology – sometimes it is only allowed to send a certain numbers
            of characters (Twitter), communication can be restricted to a
            certain form of expression (like in social networks based on voice,
            e.g. Clubhouse) or certain words or images might be flagged as
            conflicting to the platform policies. Social media platforms often
            commodify the interactions while giving little agency over the feeds
            or data, disregarding privacy rights per default. Filter bubble are
            influencable by liking, sharing or rating, but leaving them is
            difficult.
          </Text>
          <Text type='article__text'>
            These platforms, their mechanisms, what influences they have on
            society and politics, the data that they are built upon, the
            companies they are owned by – there are so many highly political
            aspects concerning how we meet online.
          </Text>
          <Text type='article__text'>
            Bad internet connection, state censorship, lacking digital literacy
            or access, different languages can make meeting each other online
            impossible. Online harassment, bias in alghorithms, hate speech and
            cyber crime can make being online together hell. One platform can
            foster fake news and alt-right echo chambers while simultaneously
            enable community-led forums that blueprint how to create dialogue in
            a society.
          </Text>
        </div>
        <Reference>
          <div>
            [1] José van Dijck, Thomas Poell &amp; Martijn de Waal,{' '}
            <i>The Platform Society. Public Values in a Connective World.</i>{' '}
            Oxford University Press, 2018.
          </div>
        </Reference>
      </Article>
      {/* ARTICLE 4 */}
      <Article
        title='Avatars and Anonymity'
        subtitle='What shape do we take digitally? How do we shape digital identities or use anonymity?'
      >
        <div className='article__paragraph'>
          <Text type='article__text'>
            Creating virtual selves is a crucial part of meeting each other
            online. It is a way to express one’s personality or anything else we
            want to embody. The virtual self glistens through the lens of
            photos, filters or avatars, it is manifested in written profiles and
            nicknames, it changes it shape on each platform or hides completely
            behind anonymity.
          </Text>
          <Text type='article__text'>
            During the first lockdow I started an online card gaming circle with
            friends. Would meet once a week over zoom, while simultaneously
            being on the same website. Additional to the basic functionality of
            syncing the cards, it also allowed us to choose the scenery of our
            game – either a bar with a wooden table or a living room with a nice
            view out of the window. We chose the bar for more authentic vibes
            and I even got a beer in on my side (because I was paying for a
            membership).
          </Text>
          <Text type='article__text'>
            On the gaming site, you could also build yourself as an avatar. And
            the most fun part about it was that there were very limited options.
            You could choose between three types of bodys: a young woman, a
            young man or an old man. You could choose hairstyle (mullet or pink
            colored hair), gendered accessories (e.g. a crown, rhinestone
            studded sunglasses or a hawaiian necklace) and clothes (imagine
            everything from the range of a national football shirt, a jeans
            jacket with a large neckline and short pants with rubber boots) and
            best of all german local accent (so your avatar would comment on the
            course of the game in saxonian or platt). Although the avatars were
            far from realistic, the feeling of being in a room with my friends
            was real.
          </Text>
        </div>
      </Article>
      {/* ARTICLE 5 */}
      <Article
        title='Online or Offline'
        subtitle='What can’t be done online? And why the dichotomy between online and offline is misleading.'
      >
        <div className='article__paragraph'>
          <Text type='article__text'>
            The online / offline dichotomy is misleading. When I talk about
            being together <i>online</i>, I don’t want to distinct it from being
            together <i>offline</i>. I rather see communication which happens
            through digital media as a daily part of how we build relationships
            and interact with each other. Therefore I am interested in exploring
            the possibilites web based technology and it design gives, to
            actively shape the way we meet – outside of commercialized platform
            mechanisms, in a playful and poetic way.
          </Text>
          <Text type='article__text'>
            Being online together, it’s about being together mediated through a
            medium. Everything that is digital is tied to a physical reality
            though, in which we, e.g. touch the smartphone screen with our
            fingertip.
          </Text>
          <Text type='article__text'>
            There are many crucial differences between online and face-to-face
            interactions and there are hierarchies of what kind of communication
            work well in which situations and which don’t. But it is not one vs.
            the other. All ways of communication, no matter online or offline,
            lay the foundation of a relationship that is formed between two
            human beings. Or sometimes a human and a bot?
          </Text>
        </div>
        <div className='article__paragraph'>
          <Quote>
            What can only be done online?
            <br />
            What can’t be done online?
          </Quote>
        </div>
        <div className='article__paragraph'>
          <Text type='article__text'>
            Being online together instead of meeting in person can often be
            without alternatives, not just during the pandemic. If you can’t
            meet in person, communicating via the digital space becomes a
            necessity.
          </Text>
          <Text type='article__text'>
            Those who live in remote rural areas, neurodivergent persons,
            disabled persons and members of socially marginalized groups are
            also often not well served by the affordances of physical social
            spaces. Online social networks can supply sites of democratic
            resistance for those who are physically or politically disempowered
            by many “real-world” networks.<sup>[1]</sup>
          </Text>
          <Text type='article__text'>
            The number and the kind of people you meet online can also be
            incomparable. If you overcome the filter bubbles, you have the
            possibility to connect to millions of people in different locations.
            Not only can you meet different, but also like-minded people. There
            is a subreddit for literally every hobby, so many different
            perspectives and specific groups of people. You can be someone else,
            you can try to stay anonymous or inhabit a virtual identity.
          </Text>
          <Text type='article__text'>
            But in spite of the many possibilities, there are some things that
            can’t be done online. Bodily sensations are for example not well
            translated through the digital medium: Touching, feeling, smelling,
            reading the room, moving with your body. In person, you have the
            ability to read other people’s reactions and their body language. A
            smile at the right moment, can make a huge difference.
          </Text>
        </div>
        <Reference>
          <div>
            [1] Andrew Feenberg, <i>Questioning Technology.</i> Routledge, 1999.
            See{' '}
            <a
              href='https://plato.stanford.edu/entries/ethics-social-networking/#EarPhiConAboOnlSocNet'
              target='_blank'
              rel='noreferrer'
            >
              Stanford Encyclopedia of Philosophy: Social Networking and Ethics
            </a>
            .
          </div>
        </Reference>
      </Article>
      {/* ARTICLE 6 */}
      <Article
        title='Digital Trust'
        subtitle='What Makes Online Interactions Personal'
      >
        <div className='article__paragraph'>
          <Text type='article__text'>
            Trust and personal connection is something that has to be carefully
            crafted in the digital realm. Interactions that want to foster the
            sense of social connection in online communities should therefore
            consider the following questions:
          </Text>
          <ol>
            <li>
              <b>Is it possible to proove that the other is not a bot?</b>
              <br />
              <i>
                Why aren’t you helping the tortoise in the desert, Leon?{' '}
                <sup>[1]</sup>
              </i>
            </li>
            <li>
              <b>Can we react to each other?</b>
              <br />
              <i>
                One of the definitions of together is to be{' '}
                <i>in or into contact, connection, collision, or union.</i> How
                can we collaborate, collide or connect online?
              </i>
            </li>
            <li>
              <b>Can I express myself?</b>
              <br />
              <i>
                When people interact with each other online, they want to be
                able to express themselves. Thus online spaces need to provide
                some sort of possibility to express oneself, to be visible, to
                be heard. To quote Kenneth Goldsmith: “The suppression of
                self-expression is impossible.” <sup>[2]</sup>
              </i>
            </li>
            <li>
              <b>What is the bodily experience of being together online?</b>
              <br />
              <i>
                Every human interaction online is is connected to a person
                offline, sitting in front of their computer in a room or
                touching the screen of their smartphone. Where are you right
                now? And how do you feel? Are you alone? Or together with
                someone?
              </i>
            </li>
          </ol>
        </div>
        <Reference>
          <div>
            [1]{' '}
            <a
              href='https://www.reddit.com/r/AskScienceFiction/comments/4t5bg4/blade_runner_just_how_does_the_voightkampff_test/'
              target='_blank'
              rel='noreferrer'
            >
              Reddit: [Blade Runner] Just how does the Voight-Kampff test work?
            </a>
          </div>
          <div>
            [2] Melanie Bühler (Ed.),
            <i>No Internet, No Art: A Lunch Bytes Anthology.</i>{' '}
            Onomatopee, 2015.
          </div>
        </Reference>
      </Article>
      <div className={`${currentlyOnline > 1 && 'hidden'} overlay`}>
        <div
          className={`${
            currentlyOnline > 1 && 'hidden'
          } overlay__info button green`}
        >
          you have to be online together to see this content
        </div>
      </div>
    </div>
  );
};

export default Editorial;
