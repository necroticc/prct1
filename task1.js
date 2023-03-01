let str
let str2

function press1(){
    str = prompt('Введите строку', '')
    document.getElementById("str").innerHTML = str;
}

function press2(){
    str2 = prompt('Введите подстроку', '')
    document.getElementById("str2").innerHTML = str2;
}

function press3(){
    let pr2 = '';
    let pr = str.indexOf(str2);
    if(pr == -1 || pr == 0){
        pr = 'отсутствует';
        pr2 = '';
    } else {
        pr2 = " - " + (pr + str2.length)
        pr++;
    }
    document.getElementById("pr").innerHTML = pr;
    document.getElementById("pr2").innerHTML = pr2;
}