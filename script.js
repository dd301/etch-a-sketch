const container = document.querySelector('#container');

function makeGrid(rows, cols){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for(let i =0 ; i<(rows*cols);i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}
makeGrid(16,16);