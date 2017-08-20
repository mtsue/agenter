window.onload = function() {
    setInterval(noticeTime, 1);
}

function timeSignal() {
    let message = document.getElementsByClassName('message')[0];
    let messageText = document.getElementsByClassName('text')[0];

    let time = getTime();

    if(time.minute === 10 && time.second <= 5){
        message.style.opacity = 1;
        messageText.innerHTML = time.hour + '時 ですよー';
    }else{
        message.style.opacity = 0;
    }
}

function getTime(){
    let date = new Date();
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return { hour, minute, second };
}