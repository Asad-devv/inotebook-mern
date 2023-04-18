import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    const message = useSelector((state) => state.notes.alert);
    const [showAlert, setShowAlert] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        if (message) {
            setShowAlert(true);
            setKey((prevKey) => prevKey + 1);
            const timeout = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    }, [message]);

    return  (
<div style={{ height: "70px" }}>
        {showAlert ?<div className=" alert alert-success alert-dismissible fade mt-2 show mb-0" role="alert" style={{ height: "70px" }}>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           <h5> {message}</h5>
           </div> :null} </div>
    ) ;
};

export default Alert;
