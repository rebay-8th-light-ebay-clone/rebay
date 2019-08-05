import React from 'react';
import Header from '../header/Header';
import APIHandler from 'utilities/APIHandler/apiHandler';
import './Page.scss';

const apiHandler = new APIHandler();

const Page = (props) => (
    <>
        <Header user={JSON.parse(localStorage.getItem("user"))} apiHandler={apiHandler} />
        <main className={`page page--${props.background}`}>
            {props.children}
        </main>
    </>
)

export default Page;