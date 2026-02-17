const allButtons = document.querySelectorAll('.btn');
const output = document.getElementById('output-field');
const input = document.getElementById('input-field');

allButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    let inputValue = input.value;
    output.innerText = inputValue;

    output.style.textTransform = 'none';
    output.style.textDecoration = 'none';
    output.style.fontWeight = 'normal';
    output.style.fontStyle = 'normal';

    if (button.classList.contains('uppercase')) {
      output.style.textTransform = 'uppercase';
    } else if (button.innerText === 'abc') {
      output.style.textTransform = 'lowercase';
    } else if (button.innerText === 'Abc') {
      output.style.textTransform = 'capitalize';
    } else if (button.innerText === 'B') {
      output.style.fontWeight = 'bold';
    } else if (button.innerText === '/') {
      output.style.fontStyle = 'italic';
    } else if (button.classList.contains('underline')) {
      output.style.textDecoration = 'underline';
    }
  });
});
