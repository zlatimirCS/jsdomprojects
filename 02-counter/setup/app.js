const decrease = document.querySelector('#btn-decrease');
const reset = document.querySelector('#btn-reset');
const increase = document.querySelector('#btn-increase');
const value = document.querySelector('#value');

let count = 0;
decrease.addEventListener('click', () => {
  count--;
  value.textContent = count;
  if (count < 0) {
    value.style.color = 'red';
  }
  if (count === 0) {
    value.style.color = 'black';
  }
});

reset.addEventListener('click', () => {
  count = 0;
  value.textContent = count;
  value.style.color = 'black';
});

increase.addEventListener('click', () => {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = 'green';
  }
  if (count === 0) {
    value.style.color = 'black';
  }
});
