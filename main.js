const doButton1 = document.getElementById("one");
const doButton10 = document.getElementById("ten");
const doButton100 = document.getElementById("han");
const result = document.getElementById("result");
const amountsum = document.getElementById("amount");
const dotweet = document.getElementById("tweet");

const bill = [
    {ratio:0.94, amount:1000},
    {ratio:0.98, amount:5000},
    {ratio:1, amount:10000}
];

let sum = 0;
let amo = 0;
let count = 0;

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

function turn(num){
    result.innerHTML = "";
    sum = 0;
    count = num;
    for(let i = 0; i < count; i++){
        amo = gacha();
        result.innerHTML += `<img src="money_${amo}.png"><br>`;
        sum += amo;
    }
    
    amountsum.innerHTML = "合計" + sum + "円";
}

function tweet(){
    let text = "";
    text += encodeURI(`${count}回ガチャを引き合計金額${sum}円`) + "%0D%0A";
    text += "%23" + encodeURI("お札ガチャ") + "%0D%0A";
    text += encodeURI("https://kyu099.github.io/billgacha/") + "%0D%0A";
    window.open(`https://twitter.com/intent/tweet?text=${text}`,);
}

doButton1.onclick = () => turn(1);
doButton10.onclick = () => turn(10);
doButton100.onclick = () => turn(100);
dotweet.onclick = tweet;