import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => { // again.. these are just props
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    // remember in useEffect hook, you can't directly use async await.
    // must wrap request in another helper functon (or use promises)
    const doTranslation = async () => {
      // it's actually response.data but we destructured
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2', 
        {}, // empty object - we don't want to send anything in body of request
        {
          params: {
            q: text,  // coming from our text prop
            target: language.value,  // from our language.value prop
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
          },
        }
      );
      console.log(data);
      setTranslated(data.data.translations[0].translatedText);
    };
    
    doTranslation(); // invoked on first mount anytime we change language or text
  }, [language, text]); // if new piece of language or text then run useEffect function.

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
};

export default Convert;