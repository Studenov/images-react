import * as Images from '../constants/images';

export function imagesReducer(state = {images: []}, action) {
    switch(action.type)
    {
        case Images.FETCH_IMAGES: 
        {
            state = {...state, images: action.payload};
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
            let position = action.payload;
            images.splice(position, 1);
            state = {...state, images: images};
            break;
        }

    }
    return state;
}