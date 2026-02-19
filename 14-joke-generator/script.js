const url = 'https://api.chucknorris.io/jokes/random';

const displayJoke = document.getElementById('display-joke');
const btn = document.querySelector('.btn');

async function generateJoke() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayJoke.innerText = data.value;
  } catch (error) {
    displayJoke.innerText = 'Error Occured!!!';
  }
}

btn.addEventListener('click', generateJoke);
