function countUp(){
    let count = document.getElementById("display").innerText;
    count = (count*1)+1;
    document.getElementById("display").innerText = count;
}
function countDown(){
    let count = document.getElementById("display").innerText;
    count = (count*1)-1;
    document.getElementById("display").innerText = count;
}
function reset(){
    document.getElementById("display").innerText = '0';
}
