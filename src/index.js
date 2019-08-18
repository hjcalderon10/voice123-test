import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';
import store from 'redux/store';
import { Provider } from 'react-redux';
import App from './components/main/App';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route path="/search" component={App} />
        <Redirect to="/notFound" />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
