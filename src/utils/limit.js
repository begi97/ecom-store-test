export const limit = (api_endpoint, page, amount) => {
    return fetch(`${api_endpoint}/${page}?limit=${amount}`)
    .then(res => res.json());
}