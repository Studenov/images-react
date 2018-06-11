import React from 'react';
import {fetchImages, addImages, deleteImages} from '../actions/imagesActions';
import HeaderImg from '../../images/cat.jpg';
import ImagesBlock from '../common/imagesBlock';

export default class MainImages extends React.Component{

    constructor(){
        
        super(...arguments);

        this.state = {
            valueUrl: '',
            valueTitle: '' 
        };

        this.handleChangeUrl    = this.handleChangeUrl.bind(this);
        this.handleChangeTitle  = this.handleChangeTitle.bind(this);

    }

    handleChangeUrl(event) {
       this.setState({valueUrl: event.target.value});
    }

    handleChangeTitle(event) {
        this.setState({valueTitle: event.target.value});
    }
    
    modalWindow(){
        const modal = document.getElementById('modal');
              modal.style.display = 'block';
    }
    closedModal(){
        const modal = document.getElementById('modal');
              modal.style.display = 'none';
    }

    newImage(){
        const {valueUrl, valueTitle} = this.state
        if((valueUrl && valueTitle) !== ''){
            let newArr = this.state.images;
                newArr.push({src: valueUrl, title: valueTitle});
                this.setState({images: newArr, valueUrl: '', valueTitle: ''}, this.closedModal);
        } else {
            alert('Нужно заполнить все поля!');
        }
    }

    delImages(index){
        const images = this.state.images;
              images.splice(index, 1);
              this.setState({images});
    }

    render(){

        console.log(this.props.images);
        
        let img = this.props.images.map((pic, index) => {
           return <ImagesBlock key={pic.title} src={pic.src} title={pic.title} delImages={this.delImages.bind(this, index)}/>
        });

        return( 
                <div>
                    <button onClick={() => {this.modalWindow()}} className='btn_add_img'>Добавить картинку</button>
                    {img}
                    <div className='modal_block' id='modal'>
                        <div className='fog' />
                        <div className='inputs_block'>
                            <p className='inputs_block_p'>Новая картинка</p>
                            <input id='url' type='text' value={this.state.valueUrl} onChange={this.handleChangeUrl} placeholder='URL' required className='inputs_block_input'/>
                            <input id='title' type='text' value={this.state.valueTitle} onChange={this.handleChangeTitle} placeholder='Title' required className='inputs_block_input'/>
                            <button onClick={() => {this.closedModal()}} className='inputs_block_btn'>Закрыть</button>
                            <button onClick={() => {this.newImage()}} className='inputs_block_btn'>Загрузить</button>
                        </div> 
                    </div>
                </div>
        );
    }
}