// Fetching data from API
let animalData = [],
  ind = 0;
async function fetchData() {
  const url = "https://zoo-animal-api.herokuapp.com/animals/rand/10";
  let res = await fetch(url);
  let data = await res.json();

  // Insert data to array;
  let len = animalData.length;
  if (len >= 20)
    animalData = [
      animalData[len - 3],
      animalData[len - 2],
      animalData[len - 1],
      ...data,
    ];
  else animalData = [...animalData, ...data];
  loadData();
}

const animalName = document.querySelector("#animal-fact__name"),
  animalNameLatin = document.querySelector(".animal-fact__name__latin"),
  animalType = document.querySelector(".animal-fact__desc__data__type"),
  animalLifespan = document.querySelector(".animal-fact__desc__data__lifespan"),
  animalHabitat = document.querySelector(".animal-fact__desc__data__habitat"),
  animalDiet = document.querySelector(".animal-fact__desc__data__diet"),
  animalLocation = document.querySelector(".animal-fact__desc__data__location"),
  animalImage = document.querySelector("#animal-picture");

function loadData() {
  animalName.innerHTML = animalData[ind].name;
  animalNameLatin.innerHTML = animalData[ind].latin_name;
  animalType.innerHTML = animalData[ind].animal_type;
  animalLifespan.innerHTML = animalData[ind].lifespan + " year(s)";
  animalHabitat.innerHTML = animalData[ind].habitat;
  animalDiet.innerHTML = animalData[ind].diet;
  animalLocation.innerHTML = animalData[ind].geo_range;
  animalImage.setAttribute("src", animalData[ind].image_link);
}

function nextAnimal() {
  ind++;
  loadData();
  if (ind == animalData.length - 3) {
    ind = 0;
    fetchData();
  }
}

fetchData();
