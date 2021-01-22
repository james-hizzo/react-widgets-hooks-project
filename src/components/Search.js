import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]); // setResults = setter function

  console.log('Results: ', results);
  // this is how you have to do axios calls in useEffect. There are 3 ways actually but 
  // you can't do it the 'normal' way as we do in class components
  useEffect(() => {
    console.log("useEffect from Search called");
    const search = async () => {  // declare helper function
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      console.log('data: ', data.query.search);
      setResults(data.query.search);
    };

    setTimeout(() => {
      if (term) {  // if term is an empty string don't try a search
        search();
      }
    }, 800);
  }, [term]); 

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item"> 
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            className="input" 
            value={term} 
            onChange={(e) => setTerm(e.target.value)}  
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search;