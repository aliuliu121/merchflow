import React, { Component } from "react";
import firebase from "firebase";

const auth = firebase.auth();

const signInBtn = document.getElementById('login-submit');
signInBtn.onclick = () => auth.signInWithEmailAndPassword(document.getElementById("login-email"), document.getElementById("login-password"));

auth.onAuthStateChanged(user => {
    if (user) {
        alert("login successful");
    }
})


export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input id="login-email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="login-password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="login-submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}