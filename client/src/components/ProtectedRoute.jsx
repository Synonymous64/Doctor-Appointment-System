import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/Features/alertSlice';
import axios from 'axios';
import { setUser } from '../redux/Features/userSlice';

export default function ProtectedRoutes({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/getUserData',
                { token: localStorage.getItem('token') },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            dispatch(hideLoading());

            if (res.data.success) {
                dispatch(setUser(res.data.data));
            } else {
                return <Navigate to="/login" />
            }

        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
        }
    };

    useEffect(() => {

        if (!user) {
            getUser();
        }

    }, [user, getUser]);


    if (localStorage.getItem('token')) {
        return children;
    } else return <Navigate to="/login" />;
}
