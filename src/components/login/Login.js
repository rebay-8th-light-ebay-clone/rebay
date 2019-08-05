import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Page from 'components/UI/Page';
import './Login.scss';
import API_URL from 'utilities/apiEndpoint';
import Error from 'components/UI/Error';

const Login = (props) => {
    const [errors, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        const { uuid } = props.match.params;
        const fetchUser = async () => {
            const { data, errors } = await props.apiHandler.get(`/api/users/${uuid}`);
            if (data) {
                localStorage.setItem("user", JSON.stringify(data))
                setSuccess(true)
            } else {
                setError(errors);
            }
        }
        if (uuid) {
            fetchUser();
        }
    }, [props.match.params, props.apiHandler])

    if (success) {
        return <Redirect to={props.history.go(-2)} />
    } else {
        return (
            <Page background={'theme'}>
                 { errors && <Error message={errors} />}
                <section className='login--container'>
                    <h1>Log In</h1>
                    <a className='google-btn-link' href={`${API_URL}/auth/google?scope=email%20profile`}>
                        <button className='google-btn'>Log In With Google</button>
                    </a>
                </section>
            </Page>
        )
    }
}

export default Login;