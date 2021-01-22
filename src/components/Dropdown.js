import React, { useState, useEffect, useRef } from 'react';

// remember - these 4 below are just props being destructured. props.xxx from <Dropdown/> in app
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // if clicked element is the ref (inside the dropdown) then return early
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      // else close the dropdown
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    // useEffect clean up function - removes event listener above
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };

  }, []); // remember the empty array arg means only happens once - on render

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // dont render anything (don't show duplicate in dropdown list)
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}  
      >
        {option.label}
      </div>
    )
  });

 //console.log('REF', ref.current);

  return (
    // ref.current shows what current ref is.
    <div ref={ref} className="ui form"> 
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={() => setOpen(!open)} // shows the opposite of what it is
          className={`ui selection dropdown  ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;