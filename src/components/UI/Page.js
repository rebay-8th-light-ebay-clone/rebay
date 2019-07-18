import React from 'react';
import './Page.scss';

const Page = (props) =>  (
    <main className='page'>
        {props.children}
    </main>
)

export default Page;