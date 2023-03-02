export const resizeTitle = (
  desktopTitleDisplacement,
  titleGraphicMask,
  titleGraphicContainer,
  titleTextsDesktop
) => {
  const titleGraphicHeight = titleGraphicMask.offsetHeight;
  const titleGraphicWidth = titleGraphicMask.offsetWidth;

  // resize title graphic
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let scale = windowWidth / titleGraphicWidth;
  titleGraphicMask.style.transformOrigin = 'top';
  titleGraphicMask.style.transform = 'scale(' + scale + ')';
  titleGraphicMask.style.maxWidth = 'calc((100 / ' + scale + ') * 1vw);  ';
  if (windowWidth >= titleGraphicWidth) {
    titleGraphicMask.style.transformOrigin = 'top';
  } else {
    titleGraphicMask.style.transformOrigin = 'top left';
    titleGraphicMask.style.transform = 'scale(' + scale + ')';
    titleGraphicMask.style.maxWidth = 'calc((100 / ' + scale + ') * 1vw);  ';
  }

  const scaledTitleGraphicHeight =
    titleGraphicMask.getBoundingClientRect().height;

  // if (windowHeight < scaledTitleGraphicHeight) {
  if (windowHeight * 1.34 < scaledTitleGraphicHeight) {
    titleGraphicContainer.style.transform =
      'translateY(-' +
      scaledTitleGraphicHeight / desktopTitleDisplacement +
      'px)';
    titleGraphicContainer.style.height =
      scaledTitleGraphicHeight / (desktopTitleDisplacement * 2) + 'px';
    for (let titleText of titleTextsDesktop) {
      titleText.classList.remove('hidden');
    }
  } else {
    titleGraphicContainer.style.height = scaledTitleGraphicHeight + 'px';

    titleGraphicContainer.style.transform = 'inherit';
    for (let titleText of titleTextsDesktop) {
      titleText.classList.add('hidden');
    }
  }
};
