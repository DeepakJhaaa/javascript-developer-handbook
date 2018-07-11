import message from './message';
import './index.scss';
import { createPlot, createPlotOne } from './game-plot';


let plotObj = createPlot();
const xPlayer = '';
const oPlayer = '';

// let rootTable = document.getElementById("root");
// for (let row of plotObj) {
//     console.log(row);
//     let rowList = document.createElement('p');
//     //rowList.setAttribute("class", 'row');
//     // rowList.setAttribute("occupient", row[0].occupied);
//     //rowList.innerHTML = message;
//     //rootTable.innerHTML += '<div class="row">' + dsf + '</div>';
//     //rootDiv1.innerHTML += rowList;
//     let slotList = document.getElementById("root");
//     for (let slot of row) {
//         slotList.innerHTML += '<div class="slot">Slot' + slot.column + '</div>';
//     }
//     rootTable.innerHTML += '<div class="row"></div>';
// }
let counter = 0;
let isCompleted = false;
const gamePlot = createPlotOne(3);

let slotClicked = (event) => {
    console.log(event);
    if (event.target.innerHTML === "" && isCompleted === false) {
        counter++;

        if (counter % 2 === 0) {
            event.target.innerHTML = "X";
            event.target.className += " x";
            console.log(event.target.slot1);
            xMoves.push([event.target.attributes.slotRow.value, event.target.attributes.slotCol.value]);
            console.log(xMoves);
            isWinner(xMoves, 'X');
        }
        else {
            event.target.innerHTML = "O";
            event.target.className += " o";
            oMoves.push([event.target.attributes.slotRow.value, event.target.attributes.slotCol.value]);
            console.log(oMoves);
            isWinner(oMoves, 'O');
        }

    }
}
const xMoves = [];
const oMoves = [];


let isWinner = (arr, player) => {
    if (arr.length >= size) {
        console.log("Checking for the winner");
        let maxCount = 0;
        let aIndexCount = 0;
        let bIndexCount = 0;
        let abIndexCount = 0;
        let baIndexCount = 0;
        for (let i = 0; i < arr.length; i++) {
            // Decreasing Length of Array
            let remainIdx = (arr.length - 1) - i;
            if (arr[0][0] == arr[i][0]) {
                aIndexCount++;
                aIndexCount >= maxCount ? (maxCount = aIndexCount) : maxCount;
                console.log(player + " A -Count AIndex:" + aIndexCount);
                console.log(player + " A -Count Max :" + maxCount);
            }
            if (arr[0][1] == arr[i][1]) {
                bIndexCount++;
                bIndexCount >= maxCount ? (maxCount = bIndexCount) : maxCount;
                console.log(player + " B -Count :" + bIndexCount);
            }
            if (arr[i][0] == arr[i][1]) {
                abIndexCount++;
                abIndexCount >= maxCount ? (maxCount = abIndexCount) : maxCount;
                console.log(player + " AB -Count :" + abIndexCount);
            }
            if (arr[i][1] == arr[remainIdx][0]) {
                baIndexCount++;
                baIndexCount >= maxCount ? (maxCount = baIndexCount) : maxCount;
                console.log(player + " BA -Count :" + baIndexCount);
            }

        }
        if (maxCount >= size) {
            isCompleted = true;
            alert(player + " is the Winner");
        }
        else if (counter >= size * size) {
            alert("Game Draw")
        }


    }

}

let plotRoot = document.createElement('div');
plotRoot.setAttribute("id", "gamePlot");
document.body.prepend(plotRoot);
const size = 2;
const rows = size || 3;
const columns = size || 3;
plotRoot.className = 'plot';
for (let x = 1; x <= rows; x++) {
    let rowDiv = document.createElement('div');
    rowDiv.className = "row";
    for (let y = 1; y <= columns; y++) {
        let slotDiv = document.createElement('div');
        slotDiv.className = "slot";
        rowDiv.appendChild(slotDiv);
        slotDiv.onclick = slotClicked;
        console.log("X :" + x);
        slotDiv.setAttribute('slotRow', x);
        slotDiv.setAttribute('slotCol', y);
    }
    plotRoot.appendChild(rowDiv);
}
