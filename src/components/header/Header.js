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
    const logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null);
    }

    const userAvatar = user.avatar || require('assets/avatar-placeholder.png');

    return (
        <BasicHeader>
            <a href="/items/new">Sell</a>
            <button className='btn--tertiary' onClick={logOut}>Log Out</button>
            <img className='avatar' alt="avatar" src={userAvatar} />
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