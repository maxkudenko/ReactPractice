import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginForm from './Components/LoginForm/LoginForm';
import NotFound from './Components/NotFound/NotFound';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swowHeader: true,
    }
  }

  hideHeader = () => {
    this.setState({
      swowHeader: false,
    });
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.swowHeader && <Header />}

          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route render={ (props) => (
                <NotFound
                    hideHeader={this.hideHeader}
                    {...props}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
