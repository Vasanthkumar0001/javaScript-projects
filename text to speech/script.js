let listenbtn=document.getElementById("button");
let textarea=document.getElementById("textarea");
let select=document.getElementById("selection");
let voices=[]
let speech= new SpeechSynthesisUtterance();
listenbtn.addEventListener("click",()=>
{
speech.text=textarea.value;
window.speechSynthesis.speak(speech);

})

 window.speechSynthesis.onvoiceschanged=()=>
 {
 voices=window.speechSynthesis.getVoices();
 speech.voice=voices[0];

 voices.forEach((voice,i)=> (select.options[i]=new Option(voice.name,i)))
 }

 select.addEventListener("change",()=>
{
    speech.voice=voices[select.value]
})