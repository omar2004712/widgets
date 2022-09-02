/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      // to hide the selected option from the list of options
      return null;
    }

    return (
      <div
        onClick={() => {
          onSelectedChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select an option</label>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
