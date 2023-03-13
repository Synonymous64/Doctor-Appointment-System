import React from 'react'
import { Link } from 'react-router-dom';
import { sideBarMenu } from '../data/data';
import '../styles/LayoutStyles.css';

const Layout = ({ children }) => {
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
                            return (
                                <>
                                    <div className="menu-item" key={menu.key}>
                                        <i className={menu.icon}></i>
                                        <Link to={menu.path}>{menu.name}</Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="content">
                    <div className="header">Header</div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;