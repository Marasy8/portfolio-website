import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/">About</Link>
                </li>
                <li>
                    <Link to = "/">Projects</Link>
                </li>
                <li>
                    <Link to = "/">Contact</Link>
                </li>
                <li>
                    <Link to = "/">GitHub</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
