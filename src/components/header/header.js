import React from 'react';
import HeaderImg from '../../images/cat.jpg';

export default class Header extends React.Component{

    render(){
        return( 
                <header className='header_block'>
                    <img src={HeaderImg} title='cat' alt='cat' />
                    <p>Images</p>
                </header>
        );
    }
}
