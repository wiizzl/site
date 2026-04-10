const originalMatchMedia = window.matchMedia;

window.matchMedia = function (query) {
  if (query.includes("prefers-reduced-motion")) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    };
  }

  return originalMatchMedia.call(window, query);
};
