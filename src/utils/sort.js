export const sort = (api_endpoint, page, sorting_string) => {
    return fetch(`${api_endpoint}/${page}?sort=${sorting_string}`)
    .then(res => res.json());
}