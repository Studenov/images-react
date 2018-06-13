import React from 'react';

export default(props) => (
    <div className='img_block'>
        <div className='img_block_div'>
            <div className='img_block_left'>
                <p className='img_block_p'>{props.title}</p>
            </div>
            <div className='img_block_right'> 
                <button onClick={props.delImages} className='img_block_button'>Удалить</button>
            </div>
        </div>
        <img src={props.src} className='img_block_images'/>
    </div>
)