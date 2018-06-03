const _baseURL = "http://demo1853299.mockable.io/";

export const getProductData = () => {
    const url = _baseURL + "products";
    // Call the fetch function passing the url of the API as a parameter
    return fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            return data.products;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getFilterData = () => {
    const url = _baseURL + "filters";
    // Call the fetch function passing the url of the API as a parameter
    return fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            return data.filters;
        })
        .catch(function (error) {
            console.log(error);
        });
}
