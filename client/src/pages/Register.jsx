import React from 'react'
import { Form, Input, message } from 'antd';
import '../styles/RegisterStyles.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/Features/alertSlice';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinishHandler = async (values) => {
        // console.log(values);
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/register', values);
            if (res.data.success) {
                message.success('User Registered Success')
                navigate('/login');
            } else {
                message.error(res.data.message)
            }
        } catch (err) {
            dispatch(hideLoading());
            console.log(err);
            message.error('something wrong with registration');
        };
    };


    return (
        <>
            <div className="form-container">
                <Form
                    layout='vertical'
                    onFinish={onFinishHandler}
                    className="card p-4 register-form"
                >
                    <h3 className='text-center'>Register Form</h3>
                    <Form.Item label="Name" name="name">
                        <Input type='text' required />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type='email' required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type='password' required />
                    </Form.Item>
                    <Link to="/login" className='my-2 text-decoration-none text-success text-bold'>alreary a user login here</Link>
                    <button className='btn btn-primary'>Register</button>
                </Form>
            </div>
        </>
    )
}

export default Register;