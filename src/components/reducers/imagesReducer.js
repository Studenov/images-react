import * as Images from '../constants/images';

export function imagesReducer(state = {images: [], is_fetching: false}, action) {
    switch(action.type)
    {
        case Images.FETCH_IMAGES_PENDING: 
        {
            state = {...state, is_fetching: true};
            break;
        }
        case Images.FETCH_IMAGES_FULFILLED: 
        {
            state = {...state, is_fetching: false, images: action.payload.data};
            break;
        }
        case Images.FETCH_IMAGES_REJECTED: 
        {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
        case Images.ADD_IMAGES: {
            let images = [...state.images];
                images.push(action.payload);
                state = {...state, images: images};
            break;
        }
        case Images.DELETE_IMAGES: {
            let images = [...state.images];
            let del_images = images.find(img => img.index === action.payload);
            let position = images.indexOf(del_images);
            images.splice(position, 1);
            state = {...state, images: images};
            break;
        }

    }
    return state;
}