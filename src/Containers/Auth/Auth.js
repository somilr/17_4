import React, { useState } from 'react'

export default function Auth() {
    const [userType, setuserType] = useState('Login');
    const [reset, setReset] = useState(false);

    const handleLogin = () => {

    }

    const handleSignup = () => {

    }

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset ?
                            <h2>Reset Password</h2> :
                            userType === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>
                    }
                </div>
                <div className="php-email-form">
                    <div className="row">
                        {
                            userType === 'Login' ? null
                                :
                                <div className="col-md-7 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div>
                        }

                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="tel" className="form-control" name="Password" id="Password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>

                        {
                            userType === 'Login' ?
                                <div className="text-center"><button type="submit" onClick={() => handleLogin()}>Login</button></div>
                                :
                                <div className="text-center"><button type="submit" onClick={() => handleSignup()}>Signup</button></div>
                        }

                        {
                            userType === 'Login' ?
                                <div className="text-center">
                                    <span>Create a new account</span><button className="p-1" type="submit" onClick={() => setuserType('Signup')}>Signup</button>
                                </div>
                                :
                                <div className="text-center">
                                    <span>Already have an account?</span><button className="p-1" type="submit" onClick={() => setuserType('Login')}>Login</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>

    )
    
}
