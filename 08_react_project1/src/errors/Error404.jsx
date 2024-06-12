import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.css'; // Optional: Add your custom styles here

const Error404 = () => {
    return (
        <div className="error-404-container">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default Error404;
