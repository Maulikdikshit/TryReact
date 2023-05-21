import React from 'react';
import Modal from './Modal';

const Contact = (props) => {
    console.log('props in contact',props);
    return (
        <div className='ui raised very padded text container sement'
            style={{marginTop:'80px'}}
        >
            <Modal></Modal>
            <h3 className='ui header'>Contact</h3>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    )
}

export default Contact;