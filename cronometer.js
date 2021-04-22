

    var start = document.getElementById('start')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')
    var ten = 0
    var tens = 0
    var second = document.getElementById('second')
    var min = document.getElementById('min')
    var interval;


    start.onclick = function (e){

    e.preventDefault()
    clearInterval(interval)

    interval =setInterval(timer  , 10)

}

    stop.onclick = function (e){
    e.preventDefault()
    clearInterval(interval)

}

    reset.onclick = function (e){
    e.preventDefault()
    clearInterval(interval)
    ten = "00"
    tens = "00"
    second.innerText = ten
    min.innerHTML = tens

}
    function timer(){

    ten++

    if (ten<10){
    second.innerHTML = "0" + ten
}

    if (ten>9){

    second.innerHTML = ten
}
    if(ten>99){

    tens++
    min.innerHTML = "0" + tens
    ten = 0
    second.innerHTML = ten
}

    if (tens>9){
    min.innerHTML = tens
}

}










