let clock=document.getElementById("clockh1");

setInterval(showtime,500)

function showtime()
{

    let date=new Date();
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
let ampm='AM';
if(hr>12)
{
   hr-=12;
}
if(date.getHours()>12)
    {
       ampm='PM'
    }
let time=`${padzero(hr)}:${padzero(min)}:${padzero(sec)} ${ampm}`
clock.innerHTML=time;

}
function padzero(time)
{
  return time<10?'0'+time:time;
}