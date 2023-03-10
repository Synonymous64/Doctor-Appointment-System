import React from 'react'
import { Form, Input } from 'antd';
import '../styles/RegisterStyles.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const onFinishHandler = (values) => {
        console.log(values);
    }

    return (
        <>
            <div className="form-container">
                <Form
                    layout='vertical'
                    onFinish={onFinishHandler}
                    className="card p-4 register-form"
                >
                    <h3 className='text-center'>Login Form</h3>
                    <Form.Item label="Email" name="email">
                        <Input type='email' required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type='password' required />
                    </Form.Item>
                    <Link to="/register" className='my-2 text-decoration-none text-success text-bold'>not a user register here</Link>
                    <button className='btn btn-primary'>Login</button>
                </Form>
            </div>
        </>
    )
}

export default Login;