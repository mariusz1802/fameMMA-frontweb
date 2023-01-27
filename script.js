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
  const minute = 60 + 1000;
  const second = 1*1000;

  
  const show = startClock();
  const actual = new Date().getTime();

  const timeLeft  = show - actual

  const daysLeft = timeLeft / day;
  const hoursLeft = timeLeft / hour;
  const minutesLeft = timeLeft / minute;
  const secondsLeft = timeLeft / second





}







interval = setInterval( compareDates, 1000);
