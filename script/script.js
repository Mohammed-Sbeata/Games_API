// let url = "https://www.gamerpower.com/api/giveaways";
const filter_button = document.querySelector(".filter-by");
const platform_filter = document.querySelector(".platform");
const sort_filter = document.querySelector(".sort-by");
const sort_genres = document.querySelector(".category");
const option = document.querySelector(".option");

const freeGamesURL = "https://www.freetogame.com/api/games";

function createDOM(result, limit) {
  let container = document.querySelector(".cards-container");
  container.textContent = "";
  const limitedResult = result.filter((e, index) => index < limit);
  limitedResult.forEach((element) => {
    container.append(createCard(element));
  });
}

function createCard(element) {
  const card = document.createElement("div");
  card.classList.add("game-card");
  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("src", element.thumbnail);
  thumbnail.classList.add("game-img");
  thumbnail.setAttribute("alt", "Thumbnail");
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("card-details");
  const title = document.createElement("h3");
  title.classList = "title";
  title.textContent = element.title;
  const link = document.createElement("a");
  link.setAttribute("href", element.game_url);
  link.append(title);

  const div = document.createElement("div");
  div.classList.add("content");
  const genre = document.createElement("span");
  genre.textContent = element.genre;
  genre.classList.add("genre");
  const platform = document.createElement("span");
  platform.textContent = element.platform;
  platform.classList.add("platform-name");
  div.append(genre, platform);

  const description = document.createElement("p");
  description.textContent = element.short_description;
  description.classList.add("game-description");

  const div2 = document.createElement("div");
  const publisher = document.createElement("span");
  publisher.textContent = `Publisher ${element.publisher} `;
  const developer = document.createElement("span");
  developer.textContent = `Developer ${element.developer}`;
  const date = document.createElement("span");
  date.textContent = `Release Date ${element.release_date}`;
  div2.classList = "creators";
  div2.append(publisher, developer, date);
  parentDiv.append(link, div, description, div2);

  card.append(thumbnail, parentDiv);
  return card;
}

fetch(freeGamesURL, createDOM);

let selectors = [platform_filter, sort_genres, sort_filter];

filter_button.addEventListener("click", () => {
  selectFilter(selectors, fetch, freeGamesURL, createDOM);
});
