import React, { useEffect } from 'react';
import Page from 'components/UI/Page';
import './Login.scss';

const Login = ({ apiHandler }) => {
    const onSuccess = async (googleUser) => {
        var profile = googleUser.getBasicProfile();
        const { data, error } = await apiHandler.post("/auth/google/callback", {
            token: googleUser.getAuthResponse().id_token,
            first_name: profile.getGivenName(),
            avatar: profile.getImageUrl(),
            email: profile.getEmail(),
            provider: 'google'
        });
        if (data) {
            console.log(data);
            localStorage.setItem("token", data.token)
        } else {
            onFailure(error)
        }
    }

    const onFailure = (error) => {
        console.log(error);
    }

    const GOOGLE_BUTTON_ID = 'google-sign-in-button';

    useEffect(() => {
        return window.gapi.signin2.render(
            GOOGLE_BUTTON_ID,
            {
                width: 380,
                height: 50,
                onsuccess: onSuccess,
                onerror: onFailure,
                longline: true,
                theme: 'dark'
            },
        );
    })

    return (
        <Page background={'theme'}>
            <section className='login--container'>
                <div id={GOOGLE_BUTTON_ID} />
            </section>
        </Page>
    )

}

export default Login;