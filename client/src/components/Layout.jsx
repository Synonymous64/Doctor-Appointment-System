import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { adminMenu, userMenu } from '../data/data';
import '../styles/LayoutStyles.css';


const Layout = ({ children }) => {
    const { user } = useSelector(state => state.user);
    const location = useLocation();

    const username = user === null ? "username" : user;
    // console.log(username);
    const sideBar = username.isAdmin === true ? adminMenu : userMenu;

    return (
        <div className='main'>
            <div className="layout">
                <div className="sidebar">
                    <div className="logo">
                        <h6>APP-FOR-DOC</h6>
                        <hr />
                    </div>
                    <div className="menu">
                        {sideBar.map(menu => {
                            const isActive = location.pathname === menu.path;
                            return (

                                <div className={`menu-item ${isActive && 'active'}`} key={menu.key}>
                                    <i className={menu.icon}></i>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div>

                            );
                        })}
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        <div className="header-content">
                            <i className="fa-solid fa-bell"></i>
                            <Link to="/profile">{username === null ? "username" : username.name}</Link>
                        </div>
                    </div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;