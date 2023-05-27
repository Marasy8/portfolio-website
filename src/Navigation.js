import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/projects">Projects</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
                <li>
                    <a href="https://github.com/marasy8" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
