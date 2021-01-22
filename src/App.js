import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    question: 'What is React?',
    answer: 'React is a front end javascript framework'
  },
  {
    question: 'Why use React?',
    answer: 'React is a favorite JS library among engineers'
  },
  {
    question: 'How do you use React?',
    answer: 'You use React by creating components'
  }
]

// these are being sent down to dropdown.js via props on <Dropdown /> below
const options = [
  {
    label: "The Color Red",
    value: 'red'
  },
  {
    label: "The Color Green",
    value: 'green'
  },
  {
    label: "A Shade of Blue",
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]); 
  // giving default value of first option. Also remember setSelected is the 'setter' function

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

    </div>
  )
};

export default App;