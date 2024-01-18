


setInterval(()=>{
  let nowTime = new Date();

  let recentHr = nowTime.getHours() ;
  let recentMin = nowTime.getMinutes();
  let recentSec = nowTime.getSeconds();




  if(recentHr<10){
    document.querySelector("#hr").innerHTML ="0"+recentHr ;
  }
  else{
    document.querySelector("#hr").innerHTML = recentHr;
  }

  if(recentMin<10){
    document.querySelector("#min").innerHTML ="0"+recentMin;
  }
  else{

  }

  if(recentSec<10){
    document.querySelector("#sec").innerHTML = `0${recentSec}`;
  }
  else{
    document.querySelector("#sec").innerHTML = recentSec;
  }

},1000)