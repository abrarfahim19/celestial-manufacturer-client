import React from 'react';

const NotFound = () => {
    return (
        <div className='row d-flex align-items-center'>
            <h1 className='col-md-6 text-center mt-5 mb-5'>Page is Missing!!!<br /> 🤕</h1>
            <img className='col-md-6 w-25' src={"https://i.ibb.co/WVYLqF0/notfound.jpg"} alt="Not Found" />
        </div>
    );
};

export default NotFound;