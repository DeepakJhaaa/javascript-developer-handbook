export const filtersGrid = function (filters) {

    for (let filter of filters) {
        if (filter.type == "PRICE") {
            let priceFilter = '<div> <select>'
            for (let minPrice of filter.values) {
                priceFilter += '<option value=' + minPrice.key + '>' + minPrice.displayValue + '</option>'
            }
            priceFilter += '</select> <span>to</span> <select>'
            for (let maxPrice of filter.values) {
                priceFilter += '<option value=' + maxPrice.key + '>' + maxPrice.displayValue + '</option>'
            }
            priceFilter += '</select> </div>'
            document.getElementById('priceFilter').innerHTML = priceFilter;
        }
        if (filter.type == "COLOUR") {
            let colorFilter = '<div> <ul>'
            for (let color of filter.values) {
                colorFilter += '<li> <label>' +
                    '<input type="checkbox" name=' + color.color + '/>' +
                    '<span class="color-box" style="background:' + color.color + '"> </span>' +
                    '<span class="color-title">' + color.title + '</span>' +
                    '</label></li>'
            }
            colorFilter += '</ul> </div>';
            document.getElementById('colorFilter').innerHTML = colorFilter;
        }
    }
}

export default filtersGrid;