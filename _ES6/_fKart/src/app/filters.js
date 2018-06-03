export const facetFilter = (color) => {
    console.log("Function Called");
    console.log(color);
    getProductData().then(data => {
        let productList = data.filter(data => data.colour.color == color);
        let productsDOM = productsGrid(data);

        let listOfProducts = document.createElement('div');
        listOfProducts.className = "products-list";
        listOfProducts.innerHTML = productsDOM;
        document.getElementById('productsGrid').appendChild(listOfProducts);
    });
}
export default facetFilter;