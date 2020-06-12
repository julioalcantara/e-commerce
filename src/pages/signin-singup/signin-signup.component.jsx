import React from 'react';

import SignIn from '../../componets/sign-in/signin.component';
import SignUp from '../../componets/sign-up/sign-up.components';

import './signin-signup.styles.scss';

const SigninAndSignupPage = () => (
    <div className='sign-signup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SigninAndSignupPage;