import React, { useState, useEffect, useRef, Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useSearchActions } from 'redux/search/search.actions';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Search({ location }) {
  const [text, setText] = useState('');
  const [shouldRedirect, setRedirect] = useState(false);
  const inputText = useRef(null);
  const { getResults } = useSearchActions();
  const params = new URLSearchParams(location.search);

  const handleKeyDown = keyCode => {
    if (keyCode === 13 && text !== '') {
      getResults(text, 1);
      setRedirect(true);
      inputText.current.value = '';
      setTimeout(() => {
        setRedirect(false);
      }, 1000);
    }
  };

  const isRendered = useSelector(
    ({ searchReducer: { isRendered } }) => isRendered,
  );
  useEffect(() => {
    if (!isRendered) {
      getResults(params.get('search'), params.get('page'));
    }
  }, []);

  return (
    <div className="search">
      <h4>
        Hello there! Here you can search for any specific word, phrase or
        paragraph that could be inside the summary of some voice123 profiles
      </h4>
      <div className="input">
        <TextField
          ref={inputText}
          id="outlined-multiline-flexible"
          label="Search"
          placeholder="Something..."
          autoFocus={true}
          onChange={({ target: { value } }) => setText(value)}
          onKeyDown={({ keyCode }) => handleKeyDown(keyCode)}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" onClick={() => handleKeyDown(13)}>
          Go!
        </Button>
      </div>
      {shouldRedirect ? (
        <Redirect
          to={{ pathname: '/search/', search: `?search=${text}&&page=1` }}
        />
      ) : (
        <Fragment />
      )}
    </div>
  );
}
