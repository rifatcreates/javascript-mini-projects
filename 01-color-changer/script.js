const body = document.getElementById('body');
const buttons = document.querySelectorAll('.button');

function colorChange(e) {
  body.style.backgroundColor = e.target.id;
}

buttons.forEach(function (btn) {
  btn.addEventListener('click', colorChange);
});
