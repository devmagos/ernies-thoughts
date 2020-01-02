import React, { Component }  from "react"
import "../App.css"
import firebase from "firebase"
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Redirect, Link } from 'react-router-dom'
firebase.auth()


class SignOut extends Component{
    state={ isSignedIn: true }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuth: () => true
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
        <span className="btnSignSpan">
          <button onClick={() => firebase.auth().signOut()} className="btnSignOut">Sign out!</button>
          <h4>Are you sure you want to sign out!</h4>
          <Link className="nav-link" to="/blog">Go Back!</Link>
        </span>
            ) : (  
                <div>      
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
                <Redirect to={"/"} />
                </div>
            )}            
        </div>
    )
  }
}


export default SignOut