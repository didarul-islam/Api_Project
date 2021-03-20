import React from 'react';

function Loading() {
    return (
        <div className='d-flex align-items-center'>
            <strong>Loading...</strong>
            <div className='spinner-grow text-sm text-danger ml-auto'
            role='status'
            aria-hidden='true'
            style={{marginLeft:'18rem'}}
            
            
            >

            </div>
        </div>
    );
}

export default Loading;