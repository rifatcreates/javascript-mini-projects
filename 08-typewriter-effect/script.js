const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex = 0;
let charIndex = 0;
let reverseType = false;

setInterval(function () {
  if (!reverseType) {
    typedTextSpan.innerHTML = typedTextSpan.innerHTML + words[wordIndex][charIndex];
    charIndex++;
  } else {
    typedTextSpan.innerHTML = typedTextSpan.innerHTML.slice(0, typedTextSpan.innerHTML.length-1);
  }

  if (charIndex === words[wordIndex].length) {
    reverseType = true;
  }

  if (typedTextSpan.innerHTML.length === 0 && reverseType) {
    reverseType = false;
    charIndex = 0;
    wordIndex++;
  }

  if (wordIndex === words.length) {
    wordIndex = 0;
  }
}, 200);
