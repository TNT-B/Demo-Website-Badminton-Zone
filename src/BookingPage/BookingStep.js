import "./style.css";
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Select, Space } from "antd";
const options = [
    {
        value: "Cash",
    },
    {
        value: "Bank account",
    },
];

const BookingStep = () => {
    return (
        <div>
            <p className="titleConfirm">Booking Confirm</p>
            <Formik>
                <Form className="formContainer">
                    <label className='bookingItem'>
                        <p className="titleField">Court name:</p>
                        <Field id="field" name="" placeholder='Name of court' />
                    </label>
                    <label className=''>
                        <p className="titleField">Customer name:</p>
                        <Field id="field" name="" placeholder='Your name' />
                    </label>
                    <label className='bookingItem'>
                        <p className="titleField">Book from:</p>
                        <Field id="field" name="" placeholder='When' />
                        <div className="titleField">to</div>
                        <Field id="field" name="" placeholder='When' />
                    </label>
                    <label className='bookingItem'>
                        <p className="titleField">Payment method</p>
                        <Space direction="vertical" size="middle" className="hello">
                            <Space.Compact>
                                <Select
                                    defaultValue="Payment method"
                                    options={options}
                                    style={{
                                        width: "360px",
                                        height: "30px",
                                        fontWeight: "bolder"
                                    }}
                                />
                            </Space.Compact>
                        </Space>
                    </label>
                    <button className='bookingItem' id="buttonBook" type="">Submit</button>

                </Form>

            </Formik>
        </div>
    )
};



export default BookingStep;