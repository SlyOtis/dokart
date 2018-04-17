import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import firebase from 'firebase';
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Main from "./screens/Main";
import history from "./history";

const config = {
    apiKey: "AIzaSyADF4X73x9TRmYw-61pXqzpolMPwq4NQnU",
    authDomain: "dokartbergen.firebaseapp.com",
    databaseURL: "https://dokartbergen.firebaseio.com",
    projectId: "dokartbergen",
    storageBucket: "dokartbergen.appspot.com",
    messagingSenderId: "294678466864"
};

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, isLoading: true};
    }

    componentDidMount() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({isLoading: false});
            if (!user) {
                history.push('/login');
            }
        });
    }

    render() {
        return this.state.isLoading ? <Splash/> : (
              <div className="app">
                  <Switch history={history}>
                      <Route path='/' component={Main}/>
                      <Route path='/login' component={Login}/>
                      <Route path="*" component={Main}/>
                  </Switch>
              </div>
        );
    }
}
export default App;
