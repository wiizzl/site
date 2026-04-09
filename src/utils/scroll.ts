import { scroll, type AnimationPlaybackControls } from "motion";

type AnimationSetupFn = () => AnimationPlaybackControls | undefined | void;

export function createResponsiveScroll(
  containerId: string,
  animationSetup: AnimationSetupFn,
) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  let scrollStop: (() => void) | undefined;
  let currentWidth = window.innerWidth;

  const init = () => {
    if (scrollStop) {
      scrollStop();
    }

    const animation = animationSetup();
    if (!animation) {
      return;
    }

    const isMobile = window.innerWidth < 768;

    scrollStop = scroll(animation, {
      container: container,
      axis: isMobile ? "x" : "y",
    });
  };

  init();

  window.addEventListener("resize", () => {
    if (window.innerWidth !== currentWidth) {
      currentWidth = window.innerWidth;
      init();
    }
  });
}
