import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router'
import Page from 'components/UI/Page';
import './Login.scss';

const Login = (props, { apiHandler }) => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const { uuid } = props.match.params;
        const fetchUser = async () => {
            const { data, error } = await apiHandler.get(`/api/users/${uuid}`);
            if (data) {
                localStorage.setItem("user", JSON.stringify(data))
                setSuccess(true)
            } else {
                setError(error);
            }
        }
        if (uuid) {
            fetchUser();
        }
    }, [props.match.params, apiHandler])

    const handleError = (err) => {
        return err && `Error: ${err.message}`;
    }

    if (success) {
        return <Redirect to="/" />
    } else {
        return (
            <Page background={'theme'}>
                {handleError(error)}
                <section className='login--container'>
                    <h1>Log In</h1>
                    <a className='google-btn-link' href="http://localhost:4000/auth/google?scope=email%20profile">
                        <button className='google-btn'>Log In With google</button>
                    </a>
                </section>
            </Page>
        )
    }
}

export default Login;