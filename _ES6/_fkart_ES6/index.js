const _baseURL = "http://demo1853299.mockable.io/";
let prodData = [];
let filterData = [];
let filterProdData = [];
const calculateDiscount = function (final, mrp) {
    let discount = (final / mrp) * 100;
    discount = parseFloat(discount).toFixed(2);
    return discount;
}

const productsGrid = function (productsList) {
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
        if (product.price.final_price !== undefined) {
            let finalPrice = '<span class="final"> &#8377 ' + product.price.final_price + '</span>';
            priceDiv += finalPrice;
        }
        if (product.price.mrp !== undefined) {
            let marpPrice = '<span class="mrp">&#8377 ' + product.price.mrp + '</span>';
            priceDiv += marpPrice;
        }
        if (product.price.final_price !== undefined && product.price.mrp !== undefined) {
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

const activeFilters = {
    color: [],
    minPrice: '',
    maxPrice: '',
    brand: []
};

const filterProducts = (activeFilters) => {
    const selectColors = activeFilters.color;
    const selectBrands = activeFilters.brand;

    getProductData().then(data => {
        data = data.filter(data => {
            if (selectColors.length > 0) {
                for (let colr of selectColors) {
                    if (data.colour.color == colr) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        });
        console.log(data);
        data = data.filter(data => {
            if (selectBrands.length > 0) {
                for (let brnd of activeFilters.brand) {
                    if (data.colour.color == brnd) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        });
        console.log(data);
        data = data.filter(data => {
            if (activeFilters.minPrice != '') {
                if (data.price.final_price >= activeFilters.minPrice) {
                    return true
                }
                return false
            }
            return true
        });
        console.log(data);
        data = data.filter(data => {
            if (activeFilters.maxPrice != '') {
                if (data.price.final_price <= activeFilters.maxPrice) {
                    return true
                }
                return false
            }
            return true
        });
        console.log(data);
        filterProdData = data;
        let productsDOM = productsGrid(data);

        let listOfProducts = document.createElement('div');
        listOfProducts.className = "products-list";
        listOfProducts.innerHTML = productsDOM;
        document.getElementById('productsGrid').innerHTML = "";
        document.getElementById('productsGrid').appendChild(listOfProducts);
    });
}
let priceArr = [];
const minFilter = (options) => {
    if (options.value != 'Min') {
        activeFilters.minPrice = options.value;
    }
    else {
        activeFilters.minPrice = '';
    }
    filterProducts(activeFilters);
}
const maxFilter = (options) => {
    if (options.value != 'Max') {
        activeFilters.maxPrice = options.value;
    } else {
        activeFilters.maxPrice = '';
    }
    filterProducts(activeFilters);
}

const colourFilter = (chkbox) => {
    if (chkbox.checked === true) {
        activeFilters.color.push(chkbox.name);
        filterProducts(activeFilters);

    } else {
        let index = activeFilters.color.indexOf(chkbox.name);
        activeFilters.color.splice(index, 1);
        filterProducts(activeFilters);
    }
}

const getProductData = function () {
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

const getFilterData = function () {
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

const filtersGrid = function (filters) {
    for (let filter of filters) {
        if (filter.type == "PRICE") {
            const priceRange = filter.values;
            let priceFilter = '<div> <select onchange="minFilter(this)">'
            for (let minPrice of priceRange) {
                priceFilter += '<option value=' + minPrice.key + '>' + minPrice.displayValue + '</option>'
            }
            priceFilter += '</select> <span>to</span> <select  onchange="maxFilter(this)">'
            for (let j = priceRange.length - 1; j > 0; j--) {
                priceFilter += '<option value=' + priceRange[j].key + '>' + priceRange[j].displayValue + '</option>'
            }
            priceFilter += '</select> </div>'
            document.getElementById('priceFilter').innerHTML = priceFilter;
        }
        if (filter.type == "COLOUR") {
            let colorFilter = '<div> <ul>'
            for (let color of filter.values) {
                colorFilter +=
                    '<li>' +
                    '<input type="checkbox" name=' + color.color + ' onchange="colourFilter(this)"/>' +
                    '<span class="color-box" style="background:' + color.color + '"> </span>' +
                    '<span class="color-title" onClick="colourFilter">' + color.title + '</span>' +
                    '</li>'
            } +
                '</ul> </div>';
            document.getElementById('colorFilter').innerHTML = colorFilter;
        }
        if (filter.type == "BRAND") {
            const brandData = filter.values;
            brandList(brandData);
        }


    }
}

const brandList = (brandNames) => {
    let brandLength = (brandNames.length >= 5) ? 5 : brandNames.length;
    let colorFilter = '<div> <ul>'
    if (brandNames.length > 0) {
        for (let i = 0; i < brandLength; i++) {
            colorFilter +=
                '<li>' +
                '<input type="checkbox" value=' + brandNames[i].value + ' onchange="colourFilter(this)"/>' +
                '<span class="color-title" onClick="colourFilter">' + brandNames[i].title + '</span>' +
                '</li>'
        }
    }
    +'</ul> </div>';
    document.getElementById('brandFilter').innerHTML = colorFilter;
}

const brandSearch = (searchKey) => {
    console.log(searchKey);
    let brandData = filterData[0].values;
    let matchCount = 0;
    const brandResult = [];
    for (let i = 0; i < brandData.length; i++) {
        if (searchKey.length > 0) {
            if (brandData[i].value.indexOf(searchKey) != -1) {
                matchCount++;
                brandResult.push(brandData[i]);
            }
        }
        if (matchCount == 5) break;
    };
    console.log(brandResult);
    brandList(brandResult);
}
getProductData().then(data => {
    console.log(data);
    prodData = data;
    filterProdData = data;
    // Get List of Products
    let productsDOM = productsGrid(data);

    let listOfProducts = document.createElement('div');
    listOfProducts.className = "products-list";
    listOfProducts.innerHTML = productsDOM;
    document.getElementById('productsGrid').appendChild(listOfProducts);
});

getFilterData().then(data => {
    console.log(data);
    filterData = data;
    // Get List of Products
    let productsDOM = filtersGrid(data);

    let filtersGridDOM = document.createElement('div');
    filtersGridDOM.className = "productsgrid-list";
    filtersGridDOM.innerHTML = productsDOM;
    document.getElementById('prodFilterGrid').appendChild(filtersGridDOM);
});

const lowToHigh = () => {
    console.log("Low to High Called");
    let sortedProdData = filterProdData.slice();
    sortedProdData.sort(function (a, b) { return a.price.final_price - b.price.final_price });
    console.log(sortedProdData);
    let productsDOM = productsGrid(sortedProdData);

    let listOfProducts = document.createElement('div');
    listOfProducts.className = "products-list";
    listOfProducts.innerHTML = productsDOM;
    document.getElementById('productsGrid').innerHTML = "";
    document.getElementById('productsGrid').appendChild(listOfProducts);
}
const highToLow = () => {
    console.log("High to Low Called");
    let sortedProdData = filterProdData.slice();
    sortedProdData.sort(function (a, b) { return b.price.final_price - a.price.final_price });

    console.log(sortedProdData);
    let productsDOM = productsGrid(sortedProdData);

    let listOfProducts = document.createElement('div');
    listOfProducts.className = "products-list";
    listOfProducts.innerHTML = productsDOM;
    document.getElementById('productsGrid').innerHTML = "";
    document.getElementById('productsGrid').appendChild(listOfProducts);
}
const relevance = () => {
    console.log(filterProdData);
    let productsDOM = productsGrid(filterProdData);

    let listOfProducts = document.createElement('div');
    listOfProducts.className = "products-list";
    listOfProducts.innerHTML = productsDOM;
    document.getElementById('productsGrid').innerHTML = "";
    document.getElementById('productsGrid').appendChild(listOfProducts);
}