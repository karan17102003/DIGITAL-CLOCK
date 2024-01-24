setInterval(()=>{
    const time = document.querySelector("#time");
    
   
    let date=new Date();
    
    let hours =date.getHours();
    
    let min=date.getMinutes();
    
    let sec=date.getSeconds();
    
    let dayNight="AM";
    if(hours >12){
        dayNight='PM';
        hours=hours-12;
    }
    if(hours <10){
        hours="0"+hours;
    }
    if(min <10){
        min="0"+min;
    }
    if(sec <10){
        sec="0"+sec;
    }
    time.innerHTML=`${hours} : ${min } : ${sec}  ${dayNight}`;
},1000)