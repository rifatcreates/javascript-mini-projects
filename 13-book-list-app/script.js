const form = document.querySelector('#book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
const bookList = document.querySelector('#book-list');

function displayBooksInfo(event) {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const year = yearInput.value;

  if (title === '' || author === '' || year === '') {
    alert('Please fill all input fields!!!');
    return;
  }

  let newLine = document.createElement('section');

  newLine.innerHTML = `<div>${title}</div>
  <div>${author}</div>
  <div>${year}</div>`;

  bookList.appendChild(newLine);

  titleInput.value = '';
  authorInput.value = '';
  yearInput.value = '';
}

form.addEventListener('submit', displayBooksInfo);
