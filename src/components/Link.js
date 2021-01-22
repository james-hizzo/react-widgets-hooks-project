import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // this below just lets you push control key plus click to open new tab.
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    console.log("children", children); // returns the text from <Link /> inside Header.js
    window.history.pushState({}, '', href); // updates the URL in case user wants to bookmark

    // communicates to route components that url has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {/* children is just the text inside */}
      {children}
    </a>
  )
};

export default Link;