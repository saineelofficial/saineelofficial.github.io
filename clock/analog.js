
var hour = document.getElementById('hourHand');
var min = document.getElementById('minHand');
var sec = document.getElementById('secHand');
var digital = document.querySelector('.digital');
var text = document.querySelector('.text')
function timeClock()
{
    var date = new Date();
    var s = date.getSeconds();
    var h = date.getHours() % 12;
    var m = date.getMinutes();

    var hourDeg = (h* 30) + (m * 0.5);
    var minDeg = (m * 6) + (s * 0.1);
    var secDeg = s * 6;

    hour.style.transform = 'rotate(' + hourDeg + 'deg)';
    min.style.transform = 'rotate(' + minDeg + 'deg)';
    sec.style.transform = 'rotate(' + secDeg + 'deg)';
    setTimeout(timeClock,1000); 
};

timeClock();

function digitalClock() 
{

    var date = new Date();
    var day = date.getDay();
    switch(day)
    {
        case 0:
            day = "Sunday";
        case 1:
            day = "Monday";
        case 2:
            day = "Tueday";
        case 3:
            day = "Wedday";
        case 4:
            day = "Thursday";
        case 5:
            day = "Friday";   
        case 6:
            day = "Saturday";
    }
    var s = date.getSeconds();
    var h = date.getHours();
    var m = date.getMinutes();
    var duration = "AM";
    if(h>12)
    {
        h=h-12;
        duration = "PM";
    }
    if(h==0)
    {
        h=12;
    }
    h=(h<10) ? "0"+h : h;
    m=(m<10) ? "0"+m : m;
    s=(s<10) ? "0"+s : s;

    
    
     var digitalTime = h + ":" + m + ":" + s + " "+ duration;
    digital.innerText = digitalTime;
    text.innerText = day;
    setTimeout(digitalClock,1000);
};
digitalClock();