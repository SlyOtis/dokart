import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './Login.css';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

class Login extends Component {

    render() {
        return (
            <div className="login_container">
                <h2>Velkommen til DoKart</h2>
                <p>For å fortsette må du logge inn med facebook</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        );
    }
}
export default Login;