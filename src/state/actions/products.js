export const listProducts = (data) => {
    return {
        type: "LIST_ALL_PRODUCTS",
        payload: data
    }
}

export const listCategories = (data) => {
    return {
        type: "LIST_CATEGORY",
        payload: data
    }
}

export const listSingleProduct = (data) => {
    return {
        type: "LIST_SINGLE_PRODUCT",
        payload: data
    }
}
