const initialState = {
    count: 0,
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1, // Increment the count value
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1, // Decrement the count value
            };
        case 'RESET':
            return {
                ...state, count: 0,
            };

        default:
            return state; // Return current state if action is not recognized
    }
};

export default countReducer;
