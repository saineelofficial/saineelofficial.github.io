
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
    var weekDay;
    switch(day)
    {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tueday";
            break;
        case 3:
            weekDay = "Wedday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;   
        case 6:
            weekDay = "Saturday";
            break;
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
    text.innerText = weekDay;
    setTimeout(digitalClock,1000);
};
digitalClock();