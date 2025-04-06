// !======>html Element
let inputSearch = document.querySelector("#search");
let forContainer = document.querySelector(".row");
//^ ======> function
async function search(a) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f37ef4e01a5a47d288b02654240510&q=${a}&days=3`
  );
  let data = await response.json();

  displayCurrent(data.location, data.current, data.forecast.forecastday);
}

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
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
function displayCurrent(x, y, z) {
  var e = new Date(y.last_updated.replace(" ", "T"));
  forContainer.innerHTML = `<div class="col-lg-4 col-1-bgcolor text-white p-0 card-1">
    <div
      class="d-flex justify-content-between align-items-center day-box"
    >
      <div class="day">${days[e.getDay()]}</div>
      <div class="data">${e.getDate() + monthNames[e.getMonth()]}</div>
    </div>
    <div class="loction mt-3 mb-2">${x.name}</div>
    <div class="num d-inline">${y.temp_c}<sup>o</sup>C</div>
    <div class="icon-num d-inline">
      <img src="https:${y.condition.icon}" alt="" />
    </div>
    <div class="status">${y.condition.text}</div>
    <div class="icon">
      <span class="me-3"
        ><img src="./asstes/imge/icon-umberella.png" alt="umberella" />
        20%</span
      >
      <span class="me-3">
        <img src="./asstes/imge/icon-wind.png" alt="wind" />
        18km/h</span
      >
      <span class="me-3">
        <img src="./asstes/imge/icon-compass.png" alt="compass" />
        East</span
      >
    </div>
  </div>
  <div class="col-lg-4 card-body2-bg text-white p-0 card-2">
    <div class="text-center day-box card-bg-head-2">
      <div class="day">${
        days[new Date(z[1].date.replace(" ", "T")).getDay()]
      }</div>
    </div>
    <div
      class="icon-num-2 d-flex justify-content-center align-items-center w-100"
    >
      <img src="https:${z[1].day.condition.icon}" alt="" />
    </div>
    <div class="num-2 text-center">${z[1].day.maxtemp_c}<sup>o</sup>C</div>
    <div class="num-3 text-center">${z[1].day.mintemp_c}<sup>o</sup></div>
    <div class="status-2 text-center">${z[1].day.condition.text}</div>
  </div>
  <div class="col-lg-4 col-1-bgcolor text-white p-0 card-3">
    <div class="text-center day-box">
      <div class="day">${
        days[new Date(z[2].date.replace(" ", "T")).getDay()]
      }</div>
    </div>
    <div
      class="icon-num-2 d-flex justify-content-center align-items-center w-100"
    >
      <img src="https:${z[2].day.condition.icon}" alt="" />
    </div>
    <div class="num-2 text-center">${z[2].day.maxtemp_c}<sup>o</sup>C</div>
    <div class="num-3 text-center">${z[2].day.mintemp_c}<sup>o</sup></div>
    <div class="status-2 text-center">${z[2].day.condition.text}</div>
  </div>
 `;
}

//*=====> evants
inputSearch.addEventListener("keyup", (a) => {
  search(a.target.value);
});

search("cairo");
