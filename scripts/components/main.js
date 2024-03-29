import { nextDays } from "./nextDays.js";
import { nextHours } from "./nextHours.js";
import { todayContainer, fragmentTodayContainer } from "./todayContainer.js";
import rain from "../components/animations/rain.js";
import thunderstorm from "../components/animations/thunderstorm.js";
import sunny from "../components/animations/sunny.js";
import cloudy from "../components/animations/cloudy.js";

const main = (data) => {
  while (document.querySelector("#backAnimate").firstElementChild) {
    document.querySelector("#backAnimate").firstElementChild.remove();
  }
  document.getElementById('weatherIcon').className = data.current.condition.code;
  const d = document.getElementById('weatherIcon').classList;
  const classThunder = d.contains(1087) || d.contains(1273) || d.contains(1276) || d.contains(1279) || d.contains(1282);
  const classRain = d.contains(1180) || d.contains(1063) || d.contains(1183) || d.contains(1186) || d.contains(1189) || d.contains(1192) || d.contains(1195) || d.contains(1198) || d.contains(1201) || d.contains(1240) || d.contains(1243) || d.contains(1246);
  const classSunny = d.contains(1000);
  const classCloudy = d.contains(1006) || d.contains(1135) || d.contains(1003) || d.contains(1009) || d.contains(1030);
  if(!!classRain) {
    rain()
    document.getElementById('weatherIcon').src = 'https://5pamm3r.github.io/umbrella/public/img/images/rain.png'
  } else if(!!classThunder) {
    document.getElementById('backAnimate').className = 'back__animate'
    thunderstorm()
    document.getElementById('weatherIcon').src = 'https://5pamm3r.github.io/umbrella/public/img/images/thunderstorm.png'
  } else if(!!classSunny) {
    document.getElementById('backAnimate').className = 'back__animate'
    sunny()
    document.getElementById('weatherIcon').src = 'https://5pamm3r.github.io/umbrella/public/img/images/sunny.png'
  } else if(!!classCloudy) {
    document.getElementById('backAnimate').className = 'back__animate'
    cloudy()
    document.getElementById('weatherIcon').src = 'https://5pamm3r.github.io/umbrella/public/img/images/cloudy.png'
  }

  document.querySelector("#location").textContent =
    `${data.location.region}, ${data.location.country}`
  document.querySelector("#temperature").textContent = Math.floor(
    data.current.temp_c
  );
  document.querySelector("#description").textContent =
    data.current.condition.text;
  document.querySelector("#day").textContent = new Date(
    data.location.localtime_epoch * 1000
  ).toLocaleString("en-EN", { dateStyle: "medium" });
  todayContainer(
    "https://5pamm3r.github.io/umbrella/public/img/icons/wind.png",
    `${data.current.wind_kph} km/h`,
    "Wind speed"
  );
  todayContainer(
    "https://5pamm3r.github.io/umbrella/public/img/icons/humidity.png",
    `${data.current.humidity} %`,
    "Humidity"
  );
  todayContainer(
    "https://5pamm3r.github.io/umbrella/public/img/icons/rain-v.png",
    data.current.precip_mm,
    "Precip. mm"
  );
  document.querySelector("#infoTodayContainer").append(fragmentTodayContainer);
  nextHours(data.location.region, data.location.country);
  if (window.innerWidth > "800") {
    nextDays(data)
  } else {
    document
      .querySelector("#nextDaysBtn")
      .addEventListener("click", () => nextDays(data));
  }
  //arreglar
  document.querySelector("#backBtn").addEventListener("click", () => {
    while (document.querySelector("#nextDaysContainer").firstElementChild) {
      document.querySelector("#nextDaysContainer").firstElementChild.remove();
    }
    document
      .querySelector(".footerSubtitle__container")
      .classList.remove("none");
    document.querySelector("#nextHoursContainer").classList.remove("none");
    document.querySelector("#nextDaysBtn").classList.remove("none");
    document.querySelector("#backBtn").classList.remove("block");

    document.querySelector("#backBtn").classList.add("none");
    document.querySelector(".footerSubtitle__container").classList.add("flex");
    document.querySelector("#nextHoursContainer").classList.add("flex");
    document.querySelector("#nextDaysBtn").classList.add("block");
  });
  document.querySelector(".location").addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".location").style.display = "block";
      document.querySelector(".search__form").style.display = "none";
    }, 10000);
    document.querySelector(".location").style.display = "none";
    document.querySelector(".search__form").style.display = "flex";
  });
};

export { main };
