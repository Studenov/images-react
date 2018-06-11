import './vendors';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './components/store';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const app = document.getElementById('root');
const Layout = () => (
    <Provider store={store}>
        <div className='body_block'>
            <Header />
            <Main />
            <Footer />
        </div>
    </Provider>
);

render(Layout(), app);