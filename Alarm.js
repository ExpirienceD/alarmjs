var currentTime;


setInterval(getTime, 1000);
function getTime() {
    var currentTime = new Date();
    var dth = currentTime.getHours();
    var dts = currentTime.getSeconds();
    var dtm = currentTime.getMinutes();
    var dt = dth + ':' + dtm + ':' + dts;
    document.getElementById('displayTime').innerHTML = dt;

}


function getDate() {
    var cday;
    var cMonth;
    currentTime = new Date()
    var gday = currentTime.getDay();
    var gMonth = currentTime.getMonth();
    var gDate = currentTime.getDate();
    var gYear = currentTime.getFullYear();


    switch (gday) {
        case 0:
            cday = "Sunday";
            break;
        case 1:
            cday = "Monday";
            break;
        case 2:
            cday = "Tuesday";
            break;
        case 3:
            cday = "Wednesday";
            break;
        case 4:
            cday = "Thursday";
            break;
        case 5:
            cday = "Friday";
            break;
        case 6:
            cday = "Saturday";
    }


    switch (gMonth) {
        case 0:
            cMonth = "January";
            break;
        case 1:
            cMonth = "February";
            break;
        case 2:
            cMonth = "March";
            break;
        case 3:
            cMonth = "April";
            break;
        case 4:
            cMonth = "May";
            break;
        case 5:
            cMonth = "June";
            break;
        case 6:
            cMonth = "July";
            break;
        case 7:
            cMonth = "August";
            break;
        case 8:
            cMonth = "September";
            break;
        case 9:
            cMonth = "October";
            break;
        case 10:
            cMonth = "November";
            break;
        case 11:
            cMonth = "December";
    }

    var dDay = cday + ', ' + cMonth + ' ' + gDate + ' ' + gYear;
    document.getElementById('displayDate').innerHTML = dDay;
}
getDate();


function changeBackground() {
    var dth = new Date().getHours();
    if (dth >= 12 && dth < 20) {
        document.body.style.backgroundImage = "linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.4)), url(afternun.jpg)";
        console.log('work')
    } else if (dth >= 20) {
        document.body.style.backgroundImage = "linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.4)), url(nightvied.jpg)";
        console.log('ikjkij')
    }

}
changeBackground();


function getAlarm() {
    var currentTime = new Date();
    var sH = currentTime.getHours();
    var sM = currentTime.getMinutes();
    var xPlay = document.getElementById('myAudio');

  
    var sHour = document.getElementById('selectHour');
    xy = sHour.selectedIndex;
    sHour = parseInt(sHour.options[xy].text);
    console.log(sHour);

  
    var sMinute = document.getElementById('selectMinute');
    yz = sMinute.selectedIndex;
    sMinute = parseInt(sMinute.options[yz].text);
    console.log(sMinute);


    calcAlarm(sHour, sMinute);

 
    xyz(sHour, sMinute);
}

function getSnzo() {
    var snze = document.getElementById('snzid');
    snze.style.display = 'block';

    document.getElementById('btn2').style.display = 'none';
    document.getElementById('btn3').style.display = 'inline-block';
}

function getSnooze() {
    var currentTime = new Date();
    var sH = currentTime.getHours();
    var sM = currentTime.getMinutes();
    var xPlay = document.getElementById('myAudio');

    var snze = document.getElementById('snzid');
    var sd = snze.selectedIndex;
    var snMinute = parseInt(snze.options[sd].text);


    var bol = new Date();
    bll = bol.getMinutes() + snMinute;
    console.log(bll);
    bol.setMinutes(bll);
    console.log(bol);
    console.log(bol.getMinutes());
    var bb = bol.getHours();
    var bn = bol.getMinutes();


    document.getElementById('btn2').style.display = 'none';
    xPlay.pause();

    getSnzo();


    calcAlarm(bb, bn);


    xyz(bb, bn);

}


function calcAlarm(hr, min) {
    var currentTime = new Date();
    var sH = currentTime.getHours();
    var sM = currentTime.getMinutes();
    var sT = currentTime.getTime();
    var xPlay = document.getElementById('myAudio');


    var gg = currentTime.setHours(hr);
    gg = gg - sH;
    gg = new Date(gg);
    gg = gg.getHours() - sH;
    console.log(gg);
    gg = gg * 60;


    var td = (gg + currentTime.setMinutes(min)) - sM;
    tr = new Date(td);
    tv = tr.getTime();
    console.log(tv);

    tx = (gg + tr.getMinutes()) - sM;
    ts = tx * 60;
    tl = ts - currentTime.getSeconds();
    tms = tl * 1000;
    console.log(tx);
    console.log(ts);


    var emma = setTimeout(() => {
        if (tv > sT) {
            xPlay.play();
            document.getElementById('col4').style.display = 'block';
        } else {
            alert('Time has passed. Enter a valid time')
        }
    }, tms);


    var mt = setInterval(() => {
        tl--;
        console.log(tl);


        if (tl == 0) {
            clearInterval(mt)
        } else {
            tl = tl;
        }

    }, 1000);


    document.getElementById('btn0').style.display = 'none';




    document.getElementById('btn1').addEventListener('click', stopAlarm)
    function stopAlarm() {
        document.getElementById('countD').style.display = 'none';
        clearTimeout(emma);
        clearInterval(mt);
        xPlay.pause();
 
        document.getElementById('btn0').style.display = 'block';
        document.getElementById('col4').style.display = 'none ';
    }
}


function xyz(sHou, sMinut) {
    let jkl = document.getElementById('countD');
    jkl.style.display = "block";

    let dt = new Date();
    let sh = dt.setHours(sHou);
    let sm = dt.setMinutes(sMinut);
    let ss = dt.setSeconds(0);
    let cd = dt.getTime();

    let sette = setInterval((ola) => {
        let now = new Date().getTime();
        let tp = cd - now;

        var hours = Math.floor((tp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((tp % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((tp % (1000 * 60)) / 1000);

        if (tp < 0) {
            clearInterval(sette);
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

    
        jkl.innerHTML = `${hours}h : ${minutes}m : ${seconds}s `;

    }, 1000);

}
