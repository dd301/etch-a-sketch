const container = document.querySelector('#container');

function makeGrid(rows, cols){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for(let i =0 ; i<(rows*cols);i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}
makeGrid(100,100);

const cells = document.querySelectorAll('.grid-item');
cells.forEach((div) => {
    div.addEventListener('mouseenter', ()=>{
        div.style.cssText = "background-color: black";
    });
});
