import Navbar from 'components/Navbar/Navbar';
import Posts from 'pages/Posts';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact to="/" component={Posts} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
