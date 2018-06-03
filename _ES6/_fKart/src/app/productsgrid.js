const calculateDiscount = (final, mrp) => {
    let discount = (final / mrp) * 100;
    discount = parseFloat(discount).toFixed(2);
    return discount;
}

export const productsGrid = (productsList) => {
    let productsGrid = '<div class="products-grid">';

    for (let product of productsList) {
        let productDiv = '<div  class="product">';
        productsGrid += productDiv;
        let prodImg = '<img src="' + product.image + '" alt="product" class="prodimg">';
        productsGrid += prodImg;
        let title = '<h3>' + product.title + '</h3>';
        productsGrid += title;
        let rating = '<div class="rating"> <span class="score">' + product.rating + '<span class="star">&#9733;</span></span></div>';
        productsGrid += rating;
        let priceDiv = '<div class="price">';
        if (product.price && product.price.final_price !== undefined) {
            let finalPrice = '<span class="final"> &#8377 ' + product.price.final_price + '</span>';
            priceDiv += finalPrice;
        }
        if (product.price && product.price.mrp !== undefined) {
            let marpPrice = '<span class="mrp">&#8377 ' + product.price.mrp + '</span>';
            priceDiv += marpPrice;
        }
        if (product.price && product.price.final_price !== undefined && product.price.mrp !== undefined) {
            let discount = '<span class="discount">' + calculateDiscount(product.price.final_price, product.price.mrp) + '% off</span>';
            priceDiv += discount;
        }
        priceDiv += '</div>';
        productsGrid += priceDiv;
        productsGrid += '</div>';
    }
    productsGrid += "</div>";

    return productsGrid;
}
export default productsGrid;