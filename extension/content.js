(() => {
  const getActive = () => {
    let el = document.activeElement;
    while (el && el.shadowRoot && el.shadowRoot.activeElement) el = el.shadowRoot.activeElement;
    return el;
  };
  const isTextarea = el => el && el.tagName === 'TEXTAREA';
  const h = e => {
    if (isTextarea(getActive())) e.stopImmediatePropagation();
  };
  addEventListener('keydown', h, { capture: true, passive: false });
})();
