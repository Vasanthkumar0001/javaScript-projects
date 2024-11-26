const question =[

    {
        question:'what is the largest animal?',answer:[
            {text:'lion',correct:'false'},
            {text:'tiger',correct:'false'},
            {text:'elephant',correct:'true'},
            {text:'dog',correct:'false'}
        ]
    },  {
        question:'what is the largest animal?',answer:[
            {text:'lion',correct:'false'},
            {text:'tiger',correct:'false'},
            {text:'elephant',correct:'true'},
            {text:'dog',correct:'false'}
        ]
    },  {
        question:'what is the largest animal?',answer:[
            {text:'lion',correct:'false'},
            {text:'tiger',correct:'false'},
            {text:'elephant',correct:'true'},
            {text:'dog',correct:'false'}
        ]
    },  {
        question:'what is the largest animal?',answer:[
            {text:'lion',correct:'false'},
            {text:'tiger',correct:'false'},
            {text:'elephant',correct:'true'},
            {text:'dog',correct:'false'}
        ]
    }
];

let currentIndex=0;
    let score=0;

let answerBtn=document.getElementById('answer')
let nextbtn=document.getElementById('nextbtn')
let ques=document.getElementById('question');
let questionElement=document.createElement('h2');
start()

function start()
{
    currentIndex=0
    score=0
    nextbtn.innerHTML='Next';
    showQuestion()
    
}

function resetfun()
{
    nextbtn.style.display='none'
    while(answerBtn.firstChild)
    {
       answerBtn.removeChild(answerBtn.firstChild)
    }
}
function showQuestion()
{
 resetfun()
let curntQuestion=question[currentIndex]
questionElement.innerHTML=` ${currentIndex+1}. ${curntQuestion.question} `;
ques.appendChild(questionElement)
let currentqus=question[currentIndex]
currentqus.answer.forEach(answer => {
    let creatbtn=document.createElement('button');
    creatbtn.innerHTML=answer.text;
    creatbtn.classList.add('btn')
    if(answer.correct)
    {
        creatbtn.dataset.correct=answer.correct;
    }
    creatbtn.addEventListener('click',selectAnswer)
    answerBtn.appendChild(creatbtn)
})
}

function selectAnswer(e)
{
    const selectbtn=e.target;
    const isCorrect=selectbtn.dataset.correct==='true';
    if(isCorrect)
    {
        selectbtn.classList.add('correct')
        score++
    }else
    {
        selectbtn.classList.add('incorrect')
    }
    Array.from(answerBtn.children).forEach(button=>
    {
        if(button.dataset.correct==='true')
        {
            button.classList.add('correct')
        }
        button.disabled='true';
    }
    )
    nextbtn.style.display='block'
}
nextbtn.addEventListener('click',()=> {
    
    if(currentIndex<question.length)
    {
        hasquestion()
    }else
    {
        start()
    }
  }

)

function scorefun()
{
    resetfun()
    questionElement.innerHTML=`your score is ${score} out of ${question.length}!`
    nextbtn.innerHTML='play Again'
    nextbtn.style.display='block'
    
}
function hasquestion()
{

    currentIndex++
    if(currentIndex<question.length)
    {
         
        showQuestion();
       
    }else
    {
        scorefun();
    }
    
}

 
 