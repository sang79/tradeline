import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages/Layouts/Home';
import { About } from './pages/linkPages/About'
import { Contact } from './pages/linkPages/Contact';
import { NoMatch } from './pages/linkPages/NoMatch';
import { Layout } from './pages/Layouts/Layout';
import './styles/styles.scss';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
