import React, { useState } from 'react';
import './Header.scss';

const BasicHeader = (props) => (
    <header className="header--container">
        <section className='header'>
            <a className='logo' href="/">Rebay</a>
            <section className='navigation'>
                {props.children}
            </section>
        </section>
    </header>
)

const AuthenticatedHeader = ({ user, setUser }) => {
    const logOut = (e) => {
        // var auth2 = window.gapi.auth2.getAuthInstance();
        // auth2.signOut().then(function () {
        //   console.log('User signed out.');
        // });
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null);
    }

    return (
        <BasicHeader>
            <button className='btn--tertiary' onClick={(e) => logOut(e)}>Log Out</button>
            <img className='avatar' alt="avatar" src="https://ggrmlawfirm.com/wp-content/uploads/avatar-placeholder.png" />
        </BasicHeader>
    )
}

const UnauthenticatedHeader = () => (
    <BasicHeader>
        <a href="/login">Log In</a>
    </BasicHeader>
)

const Header = ({ user }) => {
    const [authUser, setUser] = useState(user);
    
    return authUser 
            ? <AuthenticatedHeader user={authUser} setUser={setUser} /> 
            : <UnauthenticatedHeader />
}

export default Header;