import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlertOption() {
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState('Open');

    function handleClick() {
        setShow(!show);
        if (alert == 'Open') {
            setAlert('Close');
        } else {
            setAlert('Open')
        }
    }

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            <Button onClick={handleClick} className='mt-3'>
                {alert} Alert!!
            </Button>
            <Alert show={show} onClose={handleClick} variant="danger" className='mt-3'>
                This is a sample of danger alert!!
            </Alert>
            <Alert show={show} onClose={handleClick} variant="primary" className='mt-3'>
                This is a sample of primary alert!!
            </Alert>
            <Alert show={show} onClose={handleClick} variant="secondary" className='mt-3'>
                This is a sample of secondary alert!!
            </Alert>
            <Alert show={show} onClose={handleClick} variant="success" className='mt-3'>
                This is a sample of success alert!!
            </Alert>
            <Alert show={show} onClose={handleClick} variant="warning" className='mt-3'>
                This is a sample of warning alert!!
            </Alert>
        </div>
    );
}

export default AlertOption;