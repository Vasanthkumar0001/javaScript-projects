let img=document.getElementById('qrimg');
let input=document.getElementById('input');
let button=document.getElementById('button');
let cointainer=document.getElementById('cont')
button.addEventListener('click',qrGenerator)
function qrGenerator()
{
    let value=input.value
    if(value=='')
    {
       alert('Give any input !....')
    }else
    {
        img.setAttribute('src','https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+value)
    }

    }
   

