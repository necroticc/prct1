let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let currentPlayer = document.getElementById('curPlayer');

document.getElementById("pX").innerHTML = 0;
document.getElementById("pO").innerHTML = 0;
document.getElementById("pDraw").innerHTML = 0;

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
    cell[i].addEventListener('click', cellClick);
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

    if(checkWin(data)) {
        if(player=="X"){
            pX.innerHTML++;
        } else {
            pO.innerHTML++;
        }
        restart("Выиграли: " + player)
    } else {
        let draw = true;
        for(let i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw){
            pDraw.innerHTML++; 
            restart("Ничья!")
        }
        player = player == "X" ? "O" : "X";
        currentPlayer.innerHTML = player.toUpperCase();
    }
}

function checkWin(data){
    for(let i in winIndex) {
        let win = true;
        for(let j in winIndex[i]){
            let id = winIndex[i][j];
            let ind = data.indexOf(id);

            if(ind == -1){
                win = false;
            }
        }
        if(win) return true;
    }
    return false;
}

function restart(text){
    alert(text);
    for(let i = 0; i<9;i++){
        cell[i].innerHTML = '';
    }
}