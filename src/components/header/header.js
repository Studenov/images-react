import React from 'react';
import HeaderImg from '../../images/cat.jpg';

export default(props) => (
    <header className='header_block'>
        <img src={HeaderImg} title='cat' alt='cat' className='header_block_img'/>
        <p className='header_block_p'>Images</p>
    </header>
)
