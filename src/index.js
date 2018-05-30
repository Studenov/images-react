import './vendors';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';



const app = document.getElementById('root');

ReactDOM.render(
    <div className='body_block'>
        <Header />
        <Main />
        <Footer />
    </div>,
    app
);