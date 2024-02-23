const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");
const countryContent = document.querySelector(".counrty__conent");
const countryImage = document.querySelector(".country__image");
const countryName = document.querySelector(".country__name");
const countryCapital = document.querySelector(".country__capital");
const countryPopulation = document.querySelector(".country__population");
const countryRegion = document.querySelector(".country__region");
const countryLanguages = document.querySelector(".country__languages");
const countryCurrencies = document.querySelector(".country__currencies");
const countryTimezones = document.querySelector(".country__timezones");
const countryMap = document.querySelector(".country__map");

async function searchCountrie(country) {
  const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  const response = await fetch(url);
  const data = await response.json();
  if (country == "" || response.status == 404) {
    document.querySelector(".error").style.display = "block";
    countryContent.style.display = "none";
  } else {
    countryName.innerHTML = data[0].name.common;
    countryImage.src = data[0].flags.png;
    countryCapital.innerHTML = `<b>Capital:</b> ${data[0].capital}`;
    countryPopulation.innerHTML = `<b>Population:</b> ${data[0].population}`;
    countryRegion.innerHTML = `<b>Region:</b> ${data[0].region}`;
    countryTimezones.innerHTML = `<b>Timezones:</b> ${data[0].timezones[0]}`;
    countryLanguages.innerHTML = `<b>Languages:</b> ${Object.values(
      data[0].languages
    ).join(", ")}`;
    countryCurrencies.innerHTML = `<b>Currencies: </b>${
      data[0].currencies[Object.keys(data[0].currencies)].name
    }`;
    countryMap.innerHTML = `<b>Map:</b> <a href="${data[0].maps.googleMaps}">Google Maps</a>`;
    document.querySelector(".error").style.display = "none";
    countryContent.style.display = "block";
    searchInput.value = "";
  }
}

searchButton.addEventListener("click", () => {
  searchCountrie(searchInput.value);
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    searchCountrie(searchInput.value);
  }
});
