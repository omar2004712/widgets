import React, { useState } from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front-end javascript framework.',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favoriate JS library among engineers.',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components.',
//   },
// ];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button
        type="button"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle to show dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
}
