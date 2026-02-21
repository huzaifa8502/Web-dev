let [ ms, sec, min, hrs]=[0,0,0,0]
let displayTime=document.getElementById("diplayTime");
let timer=null;



function stopwatch()
{   ms++;
    if(ms==99)
    {   ms=0;
        sec++;
            if(sec==60)
            {   sec=0;
                min++;                    
                    
                if(min==60)
                {   min=0;
                    hrs++;
                                
                }
            }
    }
    let h=hrs<10?"0"+hrs:hrs;
    let m=ms<10?"0"+ms:ms;
    let s=sec<10?"0"+sec:sec;
    let M=min<10?"0"+min:min;

    displayTime.innerHTML=h+":"+M+":"+s+":"+m;
}


function watchStart(){
    if(timer!==null)
    {
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,10);
}

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [ ms, sec, min, hrs]=[0,0,0,0];
    displayTime.innerHTML="00:00:00:00";
}