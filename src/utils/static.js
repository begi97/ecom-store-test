export const API_ENDPOINT = "https://fakestoreapi.com/";

export const fetchProducts =  (_endpoint) => {
    // https://fakestoreapi.com/products/
    fetch(`${API_ENDPOINT}${_endpoint}`)
    .then(res => res.json())
    .then(data => data);
}