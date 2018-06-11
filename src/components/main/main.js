import React from 'react';
import {fetchImages, addImages, deleteImages} from '../actions/imagesActions';
import {connect} from 'react-redux';
import MainImages from './imagesMain';


@connect((store) => {
    return {
        images: store.images.images,
        is_fetching: store.images.is_fetching 
    }
})


export default class Main extends React.Component{

    constructor(){
        
        super(...arguments);

        let images = fetchImages();
        console.log(images, '2');

        this.props.dispatch(fetchImages());

        console.log(this.props, '3');

    }

    render(){

        if(!this.props.images.length){
            console.log(this.props.images, 'hello');
            return null;
        } 

        return( 
                <main className='main_block'>
                {
                    (!this.props.children) ?
                        (
                            this.props.is_fetching ?
                                'Идет загрузка данных...' :
                                <MainImages images={this.props.images} />
                        )
                        :
                        (this.props.children)
                }
            </main>
        );
    }
}
