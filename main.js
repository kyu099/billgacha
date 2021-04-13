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
    text += `${count}%E5%9B%9E%E3%82%AC%E3%83%81%E3%83%A3%E3%82%92%E5%BC%95%E3%81%8D%E5%90%88%E8%A8%88%E9%87%91%E9%A1%8D${sum}%E5%86%86%0D%0A`
    text += `%23%E3%81%8A%E6%9C%AD%E3%82%AC%E3%83%81%E3%83%A3%0D%0A`
    text += `https%3A%2F%2Fkyu099.github.io%2Fbillgacha%2F%0D%0A`
    window.open(`https://twitter.com/intent/tweet?text=${text}`,)
}

doButton1.onclick = () => turn(1);
doButton10.onclick = () => turn(10);
doButton100.onclick = () => turn(100);
dotweet.onclick = tweet;