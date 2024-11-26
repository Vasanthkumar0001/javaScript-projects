let tybox=document.getElementById('tybox');
let button=document.getElementById('submit');
let body=document.getElementById("body");


body.appendChild(tybox);

button.addEventListener('click',showbox)
button.addEventListener('click',box)

function showbox()
{
    tybox.classList.add("tyboxAfter");
    
}
function box()
{
   let icondiv= document.createElement('div');
   let createh1=document.createElement("h1");
   let para=document.createElement("p");
   let okbtn=document.createElement("button");
   okbtn.classList.add("okbtn");
   icondiv.classList.add('icondiv');
   
   okbtn.innerHTML="OK";
    para.innerHTML="Sucessfully Submited";
    createh1.innerHTML="Thank You !";
    icondiv.innerHTML='<i class="fa-solid fa-check"></i>'
    tybox.appendChild(icondiv);
    tybox.appendChild(createh1);
    tybox.appendChild(para);
    tybox.appendChild(okbtn);
    
    okbtn.addEventListener("click",()=>
    {
        tybox.remove()
        
    })

}
