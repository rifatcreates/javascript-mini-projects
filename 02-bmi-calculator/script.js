const form = document.getElementById('form');

function categories(bmi) {
  if (bmi < 18.6) {
    return 'Underweight';
  } else if (bmi <= 24.9) {
    return 'Normal';
  } else {
    return 'Overweight';
  }
}

function calculateBmi(event) {
  event.preventDefault();

  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const result = document.getElementById('results');

  if (height < 1 || isNaN(height)) {
    result.innerText = `Please Enter Valid Height.`;
    return;
  }

  if (weight < 1 || isNaN(weight)) {
    result.innerText = `Please Enter Valid Weight.`;
    return;
  }

  let bmi = weight / ((height / 100) * (height / 100));
  let fixedBmi = bmi.toFixed(2);
  let bmiCategory = categories(fixedBmi);

  result.innerText = `BMI: ${fixedBmi} (${bmiCategory})`;
}

form.addEventListener('submit', calculateBmi);
