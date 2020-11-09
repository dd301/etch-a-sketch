const container = document.querySelector('#container');
function makeGrid(rows, cols){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for(let i =0 ; i<(rows*cols);i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach((div) => {
    div.addEventListener('mouseenter', ()=>{
        div.style.cssText = "background-color: black";
    });
});
}
makeGrid(100,100);



const button = document.querySelector('#clearer');
button.addEventListener('click', ()=>{
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    let gridNumber = +prompt('Please enter the number of grid squares', 'Must be less than or equal to 100 to work');
    if(gridNumber<=100){
        makeGrid(gridNumber, gridNumber);
    }
});




