const initialState = [];

const productReducer = (state = initialState, action) => {

    if(action.type === "LIST_ALL_PRODUCTS") {

        state = action.payload;

        return state;
    }

    if(action.type === "LIST_CATEGORY") {
        state = action.payload;

        return state;
    }

    if(action.type === "LIST_SINGLE_PRODUCT") {
        state = action.payload;

        return state;
    }

    return state;

}


export default productReducer;