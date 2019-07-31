import React from 'react';
import Header from '../header/Header';
import './Page.scss';

const Page = (props) =>  (
    <>
        <Header user={JSON.parse(localStorage.getItem("user"))} />
        <main className={`page page--${props.background}`}>
            {props.children}
        </main>
    </>
)

export default Page;