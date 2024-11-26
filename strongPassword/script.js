let input=document.getElementById('password');
let button=document.getElementById('button');
let img=document.getElementById('img');
img.addEventListener('click',copuFun)
button.addEventListener('click',generate)

function generate()
{
    let upper="QWERTYUIOPLKJHGFDSAZXCVBNM"
    let lower="qwertyuioplkjhgfdsazxcvbnm"
    let num="1234567890"
    let sym="!@#$%^&*()_+-=?/"
    let allchar=upper+lower+num+sym;
    let password=''
    let passLength=12;
    
    password+= upper[Math.floor(Math.random()*upper.length)] 
    password+= lower[Math.floor(Math.random()*lower.length)]
    password+= sym[Math.floor(Math.random()*sym.length)]
    password+= num[Math.floor(Math.random()*num.length)]
    
    while(password.length<passLength)
    {
        password+= allchar[Math.floor(Math.random()*allchar.length)]
    }
    input.value=password

}



function copuFun()
{
    input.select();
    document.execCommand('copy')
}

