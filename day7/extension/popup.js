const jokeEl = document.getElementById("joke");
const button = document.getElementById("newJokeBtn");

async function getJoke() {
  jokeEl.textContent = "Loading...";
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
  const data = await res.json();


  console.log(data)
  jokeEl.textContent = data.joke;


  fetch('https://api.example.com/data')
  .then(response => response.json()) // parse JSON
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

button.addEventListener("click", getJoke);

// Load joke on open
getJoke();
