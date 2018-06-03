/** Create a representation of a square grid using Arrays that will match to our "game map" */
export const createPlot = (size) => {
    const rows = size || 3; /** use the provided argument or default to size 3x3 */
    const columns = size || 3;
    const table = [];
    for (let x = 0; x < rows; x++) {
        let row = [];
        for (let y = 0; y < columns; y++) {
            /** 
             * we set the row/column information inside the slot so we can return an array of slots on win conditions
             * that way we won't to make any special changes to the slot object in the future. 
             **/
            let slot = { occupied: false, symbol: '', row: x, column: y };
            row.push(slot);
        }
        table.push(row);
    }
    //console.log(table);
    return table;
}

/** Create a representation of a square grid using Arrays that will match to our "game map" */
export const createPlotOne = (size) => {
    //use the provided argument or default to size 3x3
    const rows = size || 3;
    const columns = size || 3;
    const plot = [];
    let plotDiv = document.createElement('div');
    plotDiv.className = 'plot';
    for (let x = 0; x < rows; x++) {
        let row = [];
        let rowDiv = document.createElement('div');
        rowDiv.className = "row";
        for (let y = 0; y < columns; y++) {
            /** 
             * we set the row/column information inside the slot so we can return an array of slots on win conditions
             * that way we won't to make any special changes to the slot object in the future. 
             **/
            let slotDiv = document.createElement('div');
            slotDiv.className = "slot";
            rowDiv.innerHTML = slotDiv;
            let slot = { occupied: false, symbol: '', row: x, column: y };
            row.push(slot);
        }
        console.log(rowDiv);
        plotDiv.innerHTML = rowDiv;
        plot.push(row);
    }
    console.log(plotDiv);
    //console.log(table);
    return plotDiv;
}

export default createPlot;