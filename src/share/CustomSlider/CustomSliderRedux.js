const AFTER_SLIDE_CHANGE = 'AFTER_SLIDE_CHANGE';

const initialState = {
    currentIndex: 0,
};

export function changeSlide(currentIndex) {
    return {
        type: AFTER_SLIDE_CHANGE,
        payload: currentIndex,
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
    case AFTER_SLIDE_CHANGE:
        return {
            ...state,
            currentIndex: action.payload,
        };
    default:
        return state;
    }
};
