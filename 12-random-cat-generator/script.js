const url = 'https://api.thecatapi.com/v1/images/search';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

async function displayCatPic() {
  try {
    let response = await fetch(url);
    let data = await response.json();

    let catImgUrl = data[0].url;

    const newImg = document.createElement('img');
    newImg.classList.add('randomCats');
    newImg.src = catImgUrl;

    container.innerHTML = '';
    container.appendChild(newImg);
  } catch (error) {
    container.innerHTML = '<p>There is not image found.Try again later.</p>';
  }
}

btn.addEventListener('click', displayCatPic);
