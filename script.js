const ctime = document.querySelector('.time1');
const flag = document.querySelector('.ss');
const reset = document.querySelector('.reset');


let x;

reset.addEventListener('click',function(){
   
     ctime.innerHTML = "00:00:00"; 
     flag.innerHTML="Start";
     clearInterval(x);
});

flag.addEventListener('click',function(){
    
    if(flag.className.indexOf(' start')!=-1)
     {
        let starting = new Date();

        x = setInterval(myTimer,1000);
         
        flag.innerHTML = "Stop";

        flag.className = flag.className.replace(' start','');
        flag.className+= ' stop';

       
        let k=0;

        function myTimer(){

           k++;
          
           let hrs = Math.floor(k/60/60);
           let min = Math.floor(k/60);
           let sec = k%60;
           
           if(hrs<10)
           hrs="0"+hrs;

           if(min<10)
           min="0"+min;

           if(sec<10)
           sec="0"+sec;
          
           
          ctime.innerHTML = `${hrs}:${min}:${sec}`;
        }

      
    }
    else
    {   
        flag.innerHTML = "Start";
        clearInterval(x);
        flag.className = flag.className.replace(' stop',' start');
    }
   
});



