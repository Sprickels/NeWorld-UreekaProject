// ErrorPage.js
import React from 'react';
import {Link, useParams} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <Link to ="/Home" className="btn"> <i className="fas fa-arrow-left">Back home Page</i>
    </Link>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
    </>
    
  );
};

export default ErrorPage;