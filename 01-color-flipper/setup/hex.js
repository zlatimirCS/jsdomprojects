const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  // let n = (Math.random() * 0xfffff * 1000000).toString(16);
  // let hexColor = '#' + n.slice(0, 6);
  // document.body.style.backgroundColor = hexColor;
  // color.textContent = hexColor;

  // randon hex color from hex array
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
