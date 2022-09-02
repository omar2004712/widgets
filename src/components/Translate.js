import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <Dropdown
        label="select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
}
