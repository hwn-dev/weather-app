export default function getDate({ timezone }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let currentDate = new Date();
  let day = days[currentDate.getDate()];
  let date = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let hours = currentDate.getHours();
  let mins = String(currentDate.getMinutes()).padStart(2, "0");

  let timeDiffMins = timezone / 60;
  let timeDiffHrs;

  if (timeDiffMins % 60 === 0 || timeDiffMins % -60 === 0) {
    timeDiffHrs = timeDiffMins / 60;
    hours += timeDiffHrs;
    if (hours > 24 ? (hours -= 24) : hours);
  }

  let offsetHrs = hours + timeDiffMins;
  console.log(timezone, timeDiffMins, timeDiffHrs, offsetHrs);

  // let offsetHrs = hours + timeDiffHrs;

  // let mins = currentDate.getMinutes();

  // if (timezone !== 0) ? todaysDate = `${day} ${date} ${month}, ${hours}:${mins}` :
  //   todaysDate = `${day} ${date} ${month}, ${offsetHrs}:${mins}`

  const todaysDate = `${day} ${date} ${month}, ${hours}:${mins}`;

  return todaysDate;
}
