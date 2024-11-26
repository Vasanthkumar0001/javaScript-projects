let button = document.getElementById('button');
let textarea = document.getElementById('textarea');
button.addEventListener('click', add);
let text = document.querySelector('textarea'); // This should match the function name exactly
 
function add() {
  let createarea = document.createElement('textarea');

  createarea.cols = '30';
  createarea.rows = '5';
  createarea.id = 'texte';
  textarea.appendChild(createarea);
 
  createarea.addEventListener('dblclick',()=>
{
    createarea.remove()
    update()
}) 

 
  function update()
  {
     localStorage.setItem('notes',createarea.value)
  }
}

text.addEventListener('blur')
console.log(localStorage.getItem('notes'))

