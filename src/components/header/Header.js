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

const AuthenticatedHeader = ({ user, setUser, apiHandler }) => {
    const [dropdownVisible, toggleDropdown] = useState(false)

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        apiHandler.get(`/auth/signout`);
        setUser(null);
    }

    const userAvatar = user.avatar || require('assets/avatar-placeholder.png');

    return (
        <BasicHeader>
            <a href={`/user/${user.uuid}/items`}>My Items</a>
            <a href={`/user/${user.uuid}/bids`}>My Bids</a>
            <a href={`/users/${user.uuid}/items/new`}>Sell</a>
            <div className='avatar'>
                <img className='avatar-img' alt="avatar" src={userAvatar} onClick={() => toggleDropdown(!dropdownVisible)} />
                {
                    dropdownVisible
                    && <div className='dropdown'>
                        <button className='btn--tertiary' onClick={logOut}>Log Out</button>
                    </div>
                }
            </div>
        </BasicHeader>
    )
}

const UnauthenticatedHeader = () => (
    <BasicHeader>
        <a href="/login">Log In</a>
    </BasicHeader>
)

const Header = ({ user, apiHandler }) => {
    const [authUser, setUser] = useState(user);

    return authUser
        ? <AuthenticatedHeader user={authUser} setUser={setUser} apiHandler={apiHandler} />
        : <UnauthenticatedHeader />
}

export default Header;