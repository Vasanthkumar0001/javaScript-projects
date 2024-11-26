let  quote=document.getElementById("quote")
let aurthor=document.getElementById("aurthor")
let click =document.getElementById("click")
let tweet =document.getElementById("tweet")

click.addEventListener('click',quoteFun)
function quoteFun()
{
    fetch('https://quotes-api-self.vercel.app/quote')
  .then(response =>  response.json())
  .then(data => {
    // Handle the retrieved quote
    quote.innerHTML=data.quote;
    aurthor.innerHTML=data.author;
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

}

tweet.addEventListener('click',tweeet)
function tweeet()
{
  
  window.open('https://twitter.com/intent/tweet?text='+quote.innerHTML +' --by'+aurthor.innerHTML,'tweet window','width=500,height=300')
}
