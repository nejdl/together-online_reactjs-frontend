import '../../styles/TitleGraphic/TitleGraphic.css';
import '../../styles/TitleGraphic/letters.css';
import '../../styles/TitleGraphic/fontAnimation.css';
import purpleCrosses from '../../assets/imgs/purple-crosses.svg';
import { resizeTitle } from './responsiveScaling';
import { playAnimation, pauseAnimation, bodyScroll } from './fontAnimation';
import { useEffect, useRef } from 'react';

const TitleGraphic = () => {
  const desktopTitleDisplacement = 1.6;

  const titleGraphicMaskRef = useRef(null);
  const titleGraphicContainerRef = useRef(null);
  const titleTextsDesktopRef = useRef([]);

  useEffect(() => {
    const resizeTitleFunction = () => {
      // define functions without parameters for remove event listener to work
      resizeTitle(
        desktopTitleDisplacement,
        titleGraphicMaskRef.current,
        titleGraphicContainerRef.current,
        titleTextsDesktopRef.current
      );
    };

    resizeTitleFunction();

    window.addEventListener('resize', resizeTitleFunction);
    return () => {
      window.removeEventListener('resize', resizeTitleFunction);
    };
  }, []);

  const greenLettersRef = useRef([]);
  const pinkLettersRef = useRef([]);

  useEffect(() => {
    const playAnimationFunction = () => {
      playAnimation(greenLettersRef.current, pinkLettersRef.current);
    };

    const pauseAnimationFunction = () => {
      pauseAnimation(greenLettersRef.current, pinkLettersRef.current);
    };

    const bodyScrollFunction = () => {
      bodyScroll(greenLettersRef.current, pinkLettersRef.current);
    };

    // ADD EVENT LISTENERS
    // MOUSE DOWN / UP
    window.addEventListener('mousedown', playAnimationFunction);
    window.addEventListener('mouseup', pauseAnimationFunction);
    // TOUCH START / MOVE / END
    window.addEventListener('touchstart', playAnimationFunction);
    window.addEventListener('touchmove', playAnimationFunction);
    window.addEventListener('touchend', pauseAnimationFunction);
    // SCROLL
    document.addEventListener('scroll', bodyScrollFunction);

    return () => {
      // REMOVE EVENT LISTENERS
      // MOUSE DOWN / UP
      window.removeEventListener('mousedown', playAnimationFunction);
      window.removeEventListener('mouseup', pauseAnimationFunction);
      // TOUCH START / MOVE / END
      window.removeEventListener('touchstart', playAnimationFunction);
      window.removeEventListener('touchmove', playAnimationFunction);
      window.removeEventListener('touchend', pauseAnimationFunction);
      // SCROLL
      document.removeEventListener('scroll', bodyScrollFunction);
    };
  }, []);

  return (
    <div id='titleGraphicContainer' ref={titleGraphicContainerRef}>
      <div id='titleGraphicMask' ref={titleGraphicMaskRef}>
        <img id='purple-crosses' src={purpleCrosses} />
        <div className='overlap-group'>
          {/* LETTERS */}
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[0] = el)}
            className='i tiny5x3-20 pulsing-text--reversed paused'
          >
            i
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[1] = el)}
            className='w tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-76-6px'
          >
            w
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[2] = el)}
            className='w-1 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-100-1px'
          >
            w
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[3] = el)}
            className='text-1 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-76-6px'
          >
            .
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[4] = el)}
            className='n tiny5x3-20 pulsing-text--reversed paused'
          >
            n
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[5] = el)}
            className='g tiny5x3-20 pulsing-text--reversed paused'
          >
            g
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[6] = el)}
            className='t tiny5x3-20 pulsing-text--reversed paused'
          >
            t
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[7] = el)}
            className='o tiny5x3-20 pulsing-text--reversed paused'
          >
            o
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[0] = el)}
            className='w-2 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-140px'
          >
            w
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[1] = el)}
            className='h tiny5x3-300 pulsing-text paused'
          >
            h
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[2] = el)}
            className='i-1 tiny5x3-300 pulsing-text paused'
          >
            i
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[3] = el)}
            className='n-1 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-250px'
          >
            n
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[4] = el)}
            className='e tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-250px'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[5] = el)}
            className='t-1 tiny5x3-300 pulsing-text paused'
          >
            t
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[6] = el)}
            className='w-3 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-130px'
          >
            w
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[7] = el)}
            className='text-2 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-130px'
          >
            .
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[8] = el)}
            className='t-2 tiny5x3-300 pulsing-text paused'
          >
            t
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[9] = el)}
            className='r tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-110px'
          >
            r
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[10] = el)}
            className='e-1 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-140px'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[11] = el)}
            className='t-3 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-140px'
          >
            t
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[12] = el)}
            className='o-1 tiny5x3-300 pulsing-text paused'
          >
            o
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[13] = el)}
            className='n-2 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-170px'
          >
            n
          </div>
          {/* TITLE TEXT */}
          <div className='www title-text neuehaasgrotesktextpro-55roman-normal-black-18px'>
            WWW.
          </div>
          <h1 className='together-online title-text'>
            TOGETHER-
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ONLINE
          </h1>
          <div className='net title-text neuehaasgrotesktextpro-55roman-normal-black-18px'>
            .NET
          </div>
          {/* TITLE TEXT DESKTOP */}
          <div
            ref={(el) => (titleTextsDesktopRef.current[0] = el)}
            className='www title-text--desktop hidden neuehaasgrotesktextpro-55roman-normal-black-18px'
          >
            WWW.
          </div>
          <h1
            ref={(el) => (titleTextsDesktopRef.current[1] = el)}
            className='together-online title-text--desktop hidden'
          >
            TOGETHER-
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ONLINE
          </h1>
          <div
            ref={(el) => (titleTextsDesktopRef.current[2] = el)}
            className='net title-text--desktop hidden neuehaasgrotesktextpro-55roman-normal-black-18px'
          >
            .NET
          </div>
          {/* LETTERS */}
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[14] = el)}
            className='o-2 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-140px'
          >
            o
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[15] = el)}
            className='l tiny5x3-300 pulsing-text paused'
          >
            l
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[16] = el)}
            className='e-2 tiny5x3-300 pulsing-text paused'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[8] = el)}
            className='o-3 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-82-5px'
          >
            o
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[9] = el)}
            className='e-3 tiny5x3-20 pulsing-text--reversed paused'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[10] = el)}
            className='w-4 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-82-5px'
          >
            w
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[11] = el)}
            className='t-4 tiny5x3-20 pulsing-text--reversed paused'
          >
            t
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[12] = el)}
            className='h-1 tiny5x3-20 pulsing-text--reversed paused'
          >
            h
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[13] = el)}
            className='e-4 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-64-8px'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[14] = el)}
            className='r-1 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-64-8px'
          >
            r
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[15] = el)}
            className='n-3 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-82-5px'
          >
            n
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[16] = el)}
            className='e-5 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-82-5px'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[17] = el)}
            className='t-5 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-82-5px'
          >
            t
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[18] = el)}
            className='l-1 tiny5x3-20 pulsing-text--reversed paused'
          >
            l
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[19] = el)}
            className='n-4 tiny5x3-20 pulsing-text--reversed paused tiny5x3-20-normal-salmon-100-1px'
          >
            n
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (pinkLettersRef.current[20] = el)}
            className='e-6 tiny5x3-20 pulsing-text--reversed paused'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[17] = el)}
            className='e-7 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-110px'
          >
            e
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[18] = el)}
            className='n-5 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-140px'
          >
            n
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[19] = el)}
            className='w-5 tiny5x3-300 pulsing-text paused tiny5x3-300-normal-chartreuse-170px'
          >
            w
          </div>
          <div
            aria-hidden='true'
            ref={(el) => (greenLettersRef.current[20] = el)}
            className='g-1 tiny5x3-300 pulsing-text paused'
          >
            g
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleGraphic;
