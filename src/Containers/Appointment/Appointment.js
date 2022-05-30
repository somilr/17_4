
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useState } from 'react';


function Appointment(props) {
    const [userType, setUserType] = useState([])


    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required('enter email').email('enter valid email'),
        phone: yup.number().required("please enter phone").positive().integer(),
        date: yup.date().required("please enter date")
    });



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    console.log(formik.errors);

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <Formik value={formik}>

                    <Form onSubmit={formik.handleSubmit} action method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.phone && formik.touched.phone ? <p>{formik.errors.phone}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    onChange={formik.handleChange}
                                />
                                 {
                                    formik.errors.date && formik.touched.date ? <p>{formik.errors.date}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select">
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default Appointment;