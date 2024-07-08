var isStop=true;
var s=0;
var min=0;
var hr=0;  
var st;
function start()
{
   if(isStop==true)
    {
        isStop=false;
        timer();
    }

}

function timer()
{
    if(isStop==false)
        {
            s=parseInt(s);
            min=parseInt(min);
            hr=parseInt(hr);
            s++;
            if(s==60)
                {
                    s=0;
                    min++;
                }
            if(min==60)
                {
                    min=0;
                    hr++;
                }    
            if(s<10)
                {
                    s="0"+s;
                }  
            if(min<10)
                {
                     min="0"+min;
                 } 
            if(hr<10)
                {
                    hr="0"+hr;
                } 
            timerdisplay.innerHTML= hr + " : " + min + " : " + s;
            st=setTimeout("timer()",1000);
        }
}

function stop()
{
    isStop=true;

}

function reset()
{
    isStop=true;
    s=0;
    min=0;
    hr=0;
    timerdisplay.innerHTML="00 : 00 : 00";
}

function restart()
{
    if(isStop==false)
        {
            reset();
        }
        if(isStop==true)
            {
                isStop=false;
                start();
            }
}

function lap()
{
    var lap=document.getElementById("laps");
    var li=document.createElement("li");
    li.innerHTML= hr + " : " + min + " : " + s;
    lap.appendChild(li);
}

function resetlap()
{
    clearInterval(st);
    laps.innerHTML="";
}