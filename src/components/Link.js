import React from 'react';

export default function Link({ href, className, children }) {
  const onClick = (e) => {
    // fix: when the user presses the ctrl or command key
    // the normal behaviour of the browser
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();

    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}
