import React from 'react';
import { SIDEBARDATA } from '../data/sidebarData';
import { HashLink } from 'react-router-hash-link';

export const Sidebar = () => {

    const sidebarData = SIDEBARDATA;

    return (    
        <nav className="sidebar-container">
            <ul className="sidebar-list">
                {sidebarData.map((item, index) => {
                return(
                    <li key={index} className="sidebar-list-item">
                    <HashLink to={item.path} className="sidebar-link" smooth>{item.name}</HashLink>
                    </li>
                )
                })}
            </ul>
        </nav>
    );
}





  