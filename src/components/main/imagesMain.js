import React from 'react';
import {connect} from 'react-redux';
import {fetchImages, addImages, deleteImages} from '../actions/imagesActions';
import HeaderImg from '../../images/cat.jpg';
import ImagesBlock from '../common/imagesBlock';

@connect((store) => {
    return {
        images: store.images.images, 
    }
})

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
        const {valueUrl, valueTitle} = this.state;
        const modal = document.getElementById('modal');
        let inputURL = document.getElementById('url');
        let inputTitle = document.getElementById('title');
            inputURL.style.borderColor = 'rgb(110, 110, 110)';
            inputTitle.style.borderColor = 'rgb(110, 110, 110)';
            this.setState({valueUrl: '', valueTitle: ''});
            modal.style.display = 'none'
    }

    newImage(){
        const {valueUrl, valueTitle} = this.state;
        let RegURL = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.(jpg|png|gif|jpeg)/i;
        let RegTitle = /([A-Za-zА-Яа-яЁё0-9-]+)/i;
        let testUrl, testTitle, inputURL, inputTitle;
            testUrl = RegURL.test(valueUrl);
            testTitle = RegTitle.test(valueTitle);
            inputURL = document.getElementById('url');
            inputTitle = document.getElementById('title');
        if(testUrl && testTitle){
            let url = {src: valueUrl, title: valueTitle}
            let images = addImages(url);
                this.props.dispatch(images);
                this.setState({valueUrl: '', valueTitle: ''}, this.closedModal);
        } else {
            switch (true) {
                case testUrl: 
                    inputURL.style.borderColor = 'rgb(110, 110, 110)';
                    inputTitle.style.borderColor = 'red';
                    alert('Нужно заполнить поле title!');
                    break;
                case testTitle: 
                    inputURL.style.borderColor = 'red';
                    inputTitle.style.borderColor = 'rgb(110, 110, 110)';
                    alert('Нужно заполнить поле url!');
                    break;
                default: 
                    inputURL.style.borderColor = 'red';
                    inputTitle.style.borderColor = 'red';
                    alert('Нужно заполнить все поля!');
                    break;
            }
        }
    }

    delImages(index){
        let images = deleteImages(index);
            this.props.dispatch(images);
    }

    render(){
        
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