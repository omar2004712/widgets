import React from 'react';

export default function Accordion({ items }) {
  const renderedItems = items.map((item) => (
    <div key={item.title}>
      <div className="title active">
        <i className="dropdown icon" />
        {item.title}
      </div>
      <div className="content active">
        <p>{item.content}</p>
      </div>
    </div>
  ));

  return <div className="ui styled accordion">{renderedItems}</div>;
}
