//using selectors inside the element
// traversing the dom

const buttons = document.querySelectorAll('.btn');
const content = document.querySelector('.content');
const containerChildren = Array.from(
  document.querySelector('.container').children
);

buttons.forEach((btn) => {
  btn.addEventListener('mouseenter', (e) => {
    console.log('mouse enter', e.currentTarget);
    e.currentTarget.classList.add('hover');
  });
  btn.addEventListener('mouseleave', (e) => {
    console.log('mouse leave', e.currentTarget);
    e.currentTarget.classList.remove('hover');
  });
  btn.addEventListener('click', (e) => {
    containerChildren.forEach((child) => {
      if (child.classList.contains('show-text')) {
        child.classList.remove('show-text');
        child.querySelector('.btn').innerHTML = '<i class="fas fa-plus"></i>';
      }
    });
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
    btn.innerHTML = '<i class="fas fa-minus"></i>';
  });
});
