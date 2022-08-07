document.querySelector('.dice_container').addEventListener('click', getFetch)
   
const url = `https://api.adviceslip.com/advice`;
function getFetch() {
     fetch(url)
       .then((res) => res.json())
       .then((data) => {
         console.log(data.slip.advice);
         document.querySelector('h1').innerText = data.slip.advice
         document.querySelector('span').innerText = data.slip.id
       })
       .catch((err) => {
         console.log(`error ${err}`);
       });
}
