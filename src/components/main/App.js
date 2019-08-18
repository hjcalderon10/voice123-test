import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import Search from 'components/search/Search';
import Results from 'components/results/Results';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Voice123 Test
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="body">
        <Paper className="paper">
          <Route component={Search} />
          <Results />
        </Paper>
      </div>
    </div>
  );
}

export default App;
