import React from 'react';
import {fetchImages, addImages, deleteImages} from '../actions/imagesActions';
import {connect} from 'react-redux';
import MainImages from './imagesMain';


@connect((store) => {
    return {
        images: store.images.images, 
    }
})


export default class Main extends React.Component{

    constructor(){
        
        super(...arguments);

        let images = fetchImages();
        this.props.dispatch(images);

    }

    render(){

        return( 
                <main className='main_block'>
                {
                    (!this.props.children) ?
                        <MainImages images={this.props.images} />
                        :
                        (this.props.children)
                }
            </main>
        );
    }
}
