const doButton1 = document.getElementById("one");
const doButton10 = document.getElementById("ten");
const doButton100 = document.getElementById("han");
const result = document.getElementById("result");

const bill = [
    {ratio:0.94, amount:1000},
    {ratio:0.98, amount:5000},
    {ratio:1, amount:10000}
];

function gacha(){
    let i = Math.random();
    
    if(i <= bill[0].ratio){
        return bill[0].amount;
    } else if (i <= bill[1].ratio){
        return bill[1].amount;
    } else {
        return bill[2].amount;
    }
}

function one(){
    result.innerHTML = "";
    result.innerHTML += `<img src="money_${gacha()}.png"><br>`;
}

function ten(){
    result.innerHTML = "";
    for(let i = 0; i < 10; i++){
        result.innerHTML += `<img src="money_${gacha()}.png"><br>`;
    }
}

function han(){
    result.innerHTML = "";
    for(let i = 0; i < 100; i++){
        result.innerHTML += `<img src="money_${gacha()}.png"><br>`;
    }
}

doButton1.onclick = one;
doButton10.onclick = ten;
doButton100.onclick = han;