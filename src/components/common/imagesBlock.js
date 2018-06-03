import React from 'react';

export default(props) => (
    <div className='img_block'>
        <div className='img_block_div'>
            <p className='img_block_p'>{props.title}</p> 
            <button onClick={props.delImages} className='img_block_button'>Удалить</button>
        </div>
        <img src={props.src} className='img_block_images'/>
    </div>
)