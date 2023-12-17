const secoundHand = document.querySelector('.hand-sec');
const minHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');

function setDate(){
    const now = new Date();

    const secound = now.getSeconds();
    const secoundsDegree = ((secound / 60) *360 ) + 90;
    secoundHand.style.transform = `rotate(${secoundsDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins/60) * 360) +((secound / 60) * 6) +90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + ((mins / 60) * 30) +90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    
}


setInterval(setDate, 1000);

setDate();