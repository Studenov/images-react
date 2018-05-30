import React from 'react';
import HeaderImg from '../../images/cat.jpg';
import Images1 from '../../images/images1.jpg';
import Images2 from '../../images/images2.jpg';
import Images3 from '../../images/images3.jpg';
import ImagesBlock from './imagesBlock';

export default class Main extends React.Component{

    constructor(){
        super(...arguments);
        this.state = {
            images: [
                {
                    src: Images1,
                    title: 'Images1'
                },
                {
                    src: Images2,
                    title: 'Images2'
                },
                {
                    src: Images3,
                    title: 'Images3'
                }
            ],
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
        let modal = document.getElementById('modal');
            modal.style.display = 'block';
    }
    closedModal(){
        let modal = document.getElementById('modal');
            modal.style.display = 'none';
    }

    newImage(){
        let urlImg = this.state.valueUrl;
        let titleImg = this.state.valueTitle;
        if((urlImg && titleImg) !== ''){
            let newArr = this.state.images;
                newArr.push({src: urlImg, title: titleImg});
                this.setState({images: newArr, valueUrl: '', valueTitle: ''});
                this.closedModal();
        } else {
            alert('Нужно заполнить все поля!');
        }
    }

    delImages(index){
        let images = this.state.images;
            images.splice(index, 1);
            this.setState({images});
    }

    render(){

        let img = this.state.images.map((pic, index) => {
            return <ImagesBlock key={index} {...pic} delImages={this.delImages.bind(this, index)}/>
        });

        return(
                <main className='main_block'>
                    <button onClick={() => {this.modalWindow()}} className='btn_add_img'>Добавить картинку</button>
                    {img}
                    <div className='modal_block' id='modal'>
                        <div className='fog'></div>
                        <div className='inputs_block'>
                            <p>Новая картинка</p>
                            <input id='url' type='text' value={this.state.valueUrl} onChange={this.handleChangeUrl} placeholder='URL' required/>
                            <input id='title' type='text' value={this.state.valueTitle} onChange={this.handleChangeTitle} placeholder='Title' required/>
                            <button onClick={() => {this.closedModal()}}>Закрыть</button>
                            <button onClick={() => {this.newImage()}}>Загрузить</button>
                        </div> 
                    </div>
                </main>
        );
    }
}
