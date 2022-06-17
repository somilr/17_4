import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import InputBox from '../../Component/InputBox/InputBox';

function BookAppointment(props) {
    const history = useHistory()

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required('enter email').email('enter valid email'),
        phone: yup.number().min(10).required("please enter number"),
        date: yup.date().required("please enter date"),
        department: yup.date().required("please select department"),
        message: yup.string().required("please enter message")
    });


    // const handleSubmits = (values) => {
    //     const data = JSON.parse(localStorage.getItem("users"));

    //     console.log(data);

    //     if (data === null) {
    //         localStorage.setItem("users", JSON.stringify([values]));
    //     } else {
    //         data.push(values);
    //         localStorage.setItem("users", JSON.stringify(data));
    //     }

    //     history.push("/listappointment");
    // }



    // const handleClick = () => {

    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            const data = JSON.parse(localStorage.getItem("users"));

            console.log(data);

            if (data === null) {
                localStorage.setItem("users", JSON.stringify([values]));
            } else {
                data.push(values);
                localStorage.setItem("users", JSON.stringify(data));
            }
            
            handleSubmit(values)
            history.push("/listappointment");
            // alert(JSON.stringify(values, null, 2));
        },
    });

    const  { handleSubmit, errors, handleChange } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <div className="row text-center">
                    <div className="col-6">
                        <NavLink to={"/BookAppointment"}>BookAppoinment</NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink to={"/ListAppintment"}>ListAppoinment</NavLink>
                    </div>
                </div>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <InputBox
                                    type="name"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    errors={Boolean(errors.name)}
                                    errorMessages={errors.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    errors={Boolean(errors.email)}
                                    errorMessages={errors.email}
                                    onChange={handleChange}
                                     />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <InputBox
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    maxLength={10}
                                    placeholder="Your Phone"
                                    errors={Boolean(errors.phone)}
                                    errorMessages={errors.phone}
                                    onChange={handleChange}
                                    />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <InputBox
                                    type="date"
                                    name="date"
                                    className="form-control datapicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    errors={Boolean(errors.date)}
                                    errorMessages={errors.date}
                                    onChange={handleChange} 
                                   
                                    />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <InputBox type="select"name="department" id="department" className="form-select" onChange={handleChange}
                                    errors={Boolean(errors.department)} errorMessages={errors.department}>
                                    <option disabled selected>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </InputBox>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <InputBox
                            type='textarea'
                                className="form-control"
                                name="message" rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                errors={Boolean(errors.message)}
                                errorMessages={errors.message}
                                onChange={handleChange}
                                 />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Submit</button></div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}

export default BookAppointment;