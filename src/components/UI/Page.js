import React from 'react';
import Header from '../header/Header';
import APIHandler from 'utilities/APIHandler/apiHandler';
import './Page.scss';
import Loader from 'components/UI/Loader';
const apiHandler = new APIHandler();

const Page = ({ background, children, loading }) => (
    <>
        <Header user={JSON.parse(localStorage.getItem("user"))} apiHandler={apiHandler} />
        <main className={`page page--${background}`}>
            {loading ? <Loader /> : children }
        </main>
    </>
)

export default Page;