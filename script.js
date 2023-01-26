const clock = document.querySelector(".clock");

let interval;

function startClock() {
  const showTime = new Date("February 3, 2023 19:30:00");
  const actualTime = new Date();

  const countToShow = showTime.getTime();

  console.log(countToShow);
}

const actualTimeCreator = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(date.getFullYear());
};

actualTimeCreator();

interval = setInterval(startClock, 1000);
