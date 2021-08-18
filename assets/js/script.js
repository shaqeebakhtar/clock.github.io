const hour = document.querySelector(`.clock__hour`);
const minute = document.querySelector(`.clock__minutes`);
const second = document.querySelector(`.clock__seconds`);

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mh = date.getMinutes() * 6;
  let sh = date.getSeconds() * 6;

  // Adding the rotation
  hour.style.transform = `rotateZ(${hh + mh / 12}deg)`;
  minute.style.transform = `rotateZ(${mh}deg)`;
  second.style.transform = `rotateZ(${sh}deg)`;
};

setInterval(clock, 1000);

// CLOCK-TEXT

const textHour = document.querySelector(`.clock-text__hour`);
const textMinute = document.querySelector(`.clock-text__minute`);
const textSeconds = document.querySelector(`.clock-text__seconds`);
const textAmPm = document.querySelector(`.clock-text__ampm`);
const dateDay = document.querySelector(`.clock-date__day`);
const dateDate = document.querySelector(`.clock-date__date`);
const dateMonth = document.querySelector(`.clock-date__month`);
const dateYear = document.querySelector(`.clock-date__year`);

const clockText = () => {
  let date = new Date();

  let ht = date.getHours();
  let mt = date.getMinutes();
  let st = date.getSeconds();
  let ampm;

  let dateText = date.getDate();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (ht > 12) {
    ht = ht - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (ht == 0) {
    ht = 12;
  }

  if (ht < 10) {
    ht = `0${ht}`;
  }
  textHour.innerHTML = `${ht}:`;

  if (mt < 10) {
    mt = `0${mt}`;
  }
  textMinute.innerHTML = `${mt}:`;

  if (st < 10) {
    st = `0${st}`;
  }
  textSeconds.innerHTML = st;

  textAmPm.innerHTML = ampm;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dateDay.innerHTML = `${days[day]}`;
  dateDate.innerHTML = `, ${dateText}`;
  dateMonth.innerHTML = `${months[month]}`;
  dateYear.innerHTML = `, ${year}`;
};

setInterval(clockText, 1000);
