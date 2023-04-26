function showtime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    // minutes=checkTime(minutes)
    // seconds=checkTime(seconds)
    document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;
    setTimeout(showtime,1000);
}

console.log(hours,minutes,seconds)