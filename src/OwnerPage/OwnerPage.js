import React, { useEffect } from 'react';
import './style.css'

import { Link } from "react-router-dom";
import NAV from "../Constant/SinglePage";

import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

import { ref, child, get, push, set, getDatabase } from "firebase/database";
import { database } from '../firebase';

const OwnerPage = () => {
    const [data, setData] = useState();
    const firebaseRef = ref(database, 'data');
    const dbRef = ref(getDatabase());

    useEffect(() => {
        get(child(dbRef, `data`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                    console.log(snapshot.val())
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>

            <Link className="backtoowner" to={NAV.OWNER_PAGE}>  <i class="fas fa-backward" style={{ paddingRight: 20 }}>   Back</i></Link>
            <h2 className='title'>Add Badminton Court by Owner</h2>
            <Formik
                initialValues={{
                    address: '',
                    close_time: '',
                    feature: '',
                    name: '',
                    open_time: '',
                    price: '',
                    time: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    const payload = [...data, values] // [] = data cu + value moi
                    set(firebaseRef, payload)


                    // const arrayResult = Object.keys(values).map(val => {
                    //     return { id: val, name: values[val] }
                    // });
                    console.log('set !')
                    console.log(payload)
                    console.log(typeof payload)
                    window.location.reload();

                }}
            >
                <Form className='form-owner'>
                    <label className='form-name'>
                        <p className='name1'>Name :</p>
                        <Field className='owner-input' id="name" name="name" placeholder='Name of court ?' />
                    </label>
                    <label className='form-address'>
                        <p className='address1'>Address :</p>
                        <Field className='owner-input' id="address" name="address" placeholder='Address of court ?' />
                    </label>
                    <label className='form-feature'>
                        <p className='feature1'>Feature :</p>
                        <Field className='owner-input' id="feature" name="feature" placeholder='Feature ?' />
                    </label>
                    <label className='form-time'>
                        <p className='open1'> Open from :</p>
                        <Field className='owner-input' id="open_time" name="open_time" placeholder='Open ?' />
                        <div className='to1'>to</div>
                        <Field className='owner-input' id="close_time" name="close_time" placeholder='Close ?' />
                    </label>
                    <label className='form-price'>
                        <p className='price1'>Price :</p>
                        <Field className='owner-input' id="price" name="price" placeholder='Price ?' />
                        <div className='in1'>in</div>
                        <Field className='owner-input' id="time" name="time" placeholder='Hour ?' />
                    </label>
                    <button className='btn-submit' type="submit">Add Court</button>
                </Form>

            </Formik>
        </div>
    );
};
export default OwnerPage;