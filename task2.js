let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');

let player = "X";
let winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

for(let i = 1; i <= 9; i++) {
    area.innerHTML+="<div class='cell' pos=" + i + "></div>";
}

for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    let data = [];

    if(!this.innerHTML){
        this.innerHTML = player;
    } else {
        alert("Ячейка занята");
        return;
    }

    for(let i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }
    
    player = player == "X" ? "O" : "X";
    console.log(data);
}