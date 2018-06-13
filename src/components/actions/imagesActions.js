import {FETCH_IMAGES, ADD_IMAGES, DELETE_IMAGES} from '../constants/images';
import Images1 from '../../images/images1.jpg';
import Images2 from '../../images/images2.jpg';
import Images3 from '../../images/images3.jpg';

export function fetchImages(){
    let arrImg = [
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
    ];
    return {
        type: FETCH_IMAGES,
        payload: arrImg
    }
}

export function addImages(url) {
    return {
        type: ADD_IMAGES,
        payload: url
    }
}

export function deleteImages(index) {
    return {
        type: DELETE_IMAGES,
        payload: index
    }
}