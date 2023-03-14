import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { sideBarMenu } from '../data/data';
import '../styles/LayoutStyles.css';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
    const location = useLocation();
    const { user } = useSelector(state => state.user);
    return (
        <div className='main'>
            <div className="layout">
                <div className="sidebar">
                    <div className="logo">
                        <h6>APP-FOR-DOC</h6>
                        <hr />
                    </div>
                    <div className="menu">
                        {sideBarMenu.map(menu => {
                            const isActive = location.pathname === menu.path;
                            return (

                                <div className={`menu-item ${isActive && 'active'}`} key={menu.key}>
                                    <i className={menu.icon}></i>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        <div className="header-content">
                            <i class="fa-solid fa-bell"></i>
                            <Link to="/profile">{user?.name}</Link>
                        </div>
                    </div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;