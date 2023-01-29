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

const day = document.querySelector('.days')
const hour = document.querySelector('.hours')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.seconds')



  
  const show = startClock();
  const actual = new Date().getTime();

  const timeLeft  = show - actual

  const daysLeft = Math.floor(timeLeft / (1000*60*60*24));
  const hoursLeft = Math.floor(timeLeft / (1000*60*60) % 24);

  const minutesLeft = Math.floor((timeLeft /1000/60) %  60);
  const secondsLeft = Math.floor((timeLeft/ 1000)% 60);


day.innerHTML = daysLeft;
hour.innerHTML  = hoursLeft;
minute.innerHTML = minutesLeft;
second.innerHTML = secondsLeft;

if(daysLeft < 10){
  day.innerHTML = "0" + daysLeft;
}
if(hoursLeft < 10) {
  hour.innerHTML = "0" + hoursLeft
}
if(minutesLeft < 10) {
  minute.innerHTML = "0" + minutesLeft;
}
if(secondsLeft < 10) {
  second.innerHTML = "0" + secondsLeft;
}


}






interval = setInterval( compareDates, 1000);





