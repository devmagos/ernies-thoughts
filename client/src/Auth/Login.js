import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Redirect } from 'react-router-dom'


firebase.initializeApp({
    apiKey: 'AIzaSyCtgJYo0ss0wmxV5Repzk1VLROohaQhh_U',
    authDomain: 'ernies-thoughts.firebaseapp.com'
})

 class Login extends Component {
    state={ isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuth: () => false
        }
    }

        componentDidMount = () => {
            firebase.auth().onAuthStateChanged(user => {
                this.setState({ isSignedIn: !!user })
            })
        }


    render() {
        return (
            <div className="background">
                {this.state.isSignedIn ? (
                <span>
                <div>Signed In!<Redirect to={"/blog"} /></div>
                </span>
                    ) : (                  
                    <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                    />
                )} 
            </div>
        )
    }
}

export default Login
