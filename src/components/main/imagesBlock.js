import React from 'react';

export default class ImagesBlock extends React.Component{  

    constructor(){
        super(...arguments);
    }



    render(){

        return( 
                <div className='img_block'>
                    <div>
                        <p>{this.props.title}</p> 
                        <button onClick={this.props.delImages}>Удалить</button>
                    </div>
                    <img src={this.props.src} />
                </div>
        );
    }
}