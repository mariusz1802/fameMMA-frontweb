const clock = document.querySelector(".clock");

let interval;

function startClock() {
  const showTime = new Date("February 3, 2023 19:30:00");
  const countToShow = showTime.getTime();
  return countToShow;

}

const montsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dezember"];


const actualTimeCreator = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const stringMonth = montsArr[month];

  const stringDate = `${stringMonth} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
  const actualDate = new Date(stringDate).getTime();
  return actualDate

};

function compareDates(){
  
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute =  1000 / 60;
  const second = 1*1000;

  
  const show = startClock();
  const actual = new Date().getTime();

  const timeLeft  = show - actual

  const daysLeft = Math.floor(timeLeft / day);
  const hoursLeft = Math.floor(timeLeft / hour % 24);

  const minutesLeft = Math.floor((timeLeft / (1000 / 60)) %  60);
  const secondsLeft = Math.floor((timeLeft/ 1000)% 60);
console.log(minutesLeft);

}






interval = setInterval( compareDates, 1000);





