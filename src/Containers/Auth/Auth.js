import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Auth(props) {

    const [usertype, setuserType] = useState('Login');
    const [password, setpassword] = useState(false)
    const handleLogin = () => {

    }
    const handleSignup = () => {

    }
    const passwordchng = () => {

    }

    let login = {
        email: yup.string().required('please enter email').email('please enter your email'),
        password: yup.number().required('please enter your password')
    }

    let loginschema = yup.object().shape(login)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema:  loginschema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik.errors);

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                {
                    password ?
                        <div className="section-title">
                            <h2 className='centeerr'>Forget password</h2>
                        </div>
                        : usertype === 'Login' ?
                            <div classname="section-title">
                                <h2 className="centeerr">Login</h2>
                            </div>
                            :
                            <div classname="section-title">
                                <h2 className="centeerr">Signup</h2>
                            </div>

                }
                <div action method="post" className="php-email-form">
                    <formik value={formik}>
                        <div className="row">
                            {
                                password === true ? <div className="col-md-12 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={formik.handleChange}
                                            value={formik.values.email}
                                        
                                    />
                                    <div className="validate" />
                                </div> : null
                            }
                            {
                                // password === true ? <div className="col-md-12 form-group mt-3 mt-md-0">
                                //     <input type="name" className="form-control" name="name" id="name" placeholder="Your Name" data-rule="name" data-msg="Please enter a valid email" />
                                //     <div className="validate" />
                                // </div> : 
                                usertype === 'Login' ?
                                    null
                                    :
                                    <div className="col-md-12 form-group mt-3 mt-md-0">
                                        <input 
                                            type="name" 
                                            className="form-control" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Your Name" 
                                            
                                        />
                                        <div className="validate" />
                                    </div>

                            }
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="phone"
                                    placeholder="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                <div className="validate" />
                            </div>
                        </div>
                        {
                            password ?
                                <div className="text-center">
                                    <button type="submit" onClick={() => passwordchng()}>Forget password</button><br></br>
                                </div>
                                :
                                usertype === 'Login' ?
                                    <div className="text-center">
                                        <button type="submit" onClick={() => handleLogin()}>Login</button><br></br>
                                    </div> :
                                    <div className="text-center">
                                        <button onClick={() => handleSignup()} type={'submit'}>signup</button>
                                    </div>
                        }
                        {

                            password === true ?
                                <div className='text-center mt-5'>
                                    <span>already have an account ?</span>
                                    <button onClick={() => setpassword(false)}>Login</button>
                                </div> :
                                usertype === 'Login' ?
                                    <div className='text-center mt-5'>
                                        <span>create a New account</span>
                                        <button onClick={() => { setuserType('Signup') }} >signup</button> <br></br>
                                        <button onClick={() => { setpassword(true) }}>Forget password</button>
                                    </div> :
                                    <div className='text-center mt-5'>
                                        <span>already have an account ?</span>
                                        <button onClick={() => { setuserType('Login') }} >Login</button>
                                    </div>
                        }
                    </formik>
                </div>
            </div>
        </section>
    );
}

export default Auth;