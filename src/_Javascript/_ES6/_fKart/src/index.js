import "./style.css";
import "normalize.css";
import { getProductData, getFilterData } from "./app/services";
import productsGrid from "./app/productsGrid";
import { filtersGrid } from "./app/filterGrid";

const createProducts = (data) => {
    const productsDOM = productsGrid(data);
    let productList = '<div class="products-list">' + productsDOM + '</div>';
    document.getElementById('productsGrid').innerHTML = productList;
}

getProductData().then(data => {
    createProducts(data);
})

getFilterData().then(data => {
    filtersGrid(data);
})
const facetFilter = (color) => {
    console.log("Function Called");
    console.log(color);
    getProductData().then(data => {
        let productList = data.filter(data => data.colour.color == color);
        createProducts(productList);
    });
}