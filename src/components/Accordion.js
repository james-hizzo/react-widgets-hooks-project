import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); 

  // Helper function in functional component
  const onTitleClick = (index) => {
    setActiveIndex(index); // this is a setter FUNCTION - must be a function
  };

  // remember: index is a second built in param for map function
  const renderedItems = items.map((item, index) => {
    // this is adding the class 'active' if index equals activeIndex
    const active = index === activeIndex ? 'active' : '';
    return (
      // just using a fragment so there isn't an extra div
      // that messes with the semantic ui layout
      <React.Fragment key={item.question}> 
        <div 
          className={`title ${active}`} // so adds class title and active if active
          onClick={() => onTitleClick(index)}  
        >
          <i className="dropdown icon"></i>
            {item.question}
        </div>
        <div className={`content ${active}`}>
          <p>{item.answer}</p>
        </div>
      </React.Fragment>
    )
  });

  return <div className="ui styled accordion">
    {renderedItems}
    <h1>Active Index: {activeIndex}</h1>
  </div>
};

export default Accordion;