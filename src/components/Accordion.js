/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function onTitleClick(index) {
    if (activeIndex === index) {
      return setActiveIndex(null);
    }

    return setActiveIndex(index);
  }

  const renderedItems = items.map((item, idx) => {
    const active = idx === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(idx)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
}
