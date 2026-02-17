const baseUrl = 'https://picsum.photos/';
const container = document.querySelector('.content');
const button = document.getElementById('btn');
const rows = 7;

function randomSize() {
  const randomNumber = Math.floor(Math.random() * 10 + 300);
  return randomNumber;
}

function generateImages() {
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${baseUrl}${randomSize()}/${randomSize()}`;
    container.appendChild(img);
  }
}

button.addEventListener('click', generateImages);
