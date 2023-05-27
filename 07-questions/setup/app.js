//using selectors inside the element
// traversing the dom

// const buttons = document.querySelectorAll('.btn');
// const content = document.querySelector('.content');
// const containerChildren = Array.from(
//   document.querySelector('.container').children
// );

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', (e) => {
//     console.log('mouse enter', e.currentTarget);
//     e.currentTarget.classList.add('hover');
//   });
//   btn.addEventListener('mouseleave', (e) => {
//     console.log('mouse leave', e.currentTarget);
//     e.currentTarget.classList.remove('hover');
//   });
//   btn.addEventListener('click', (e) => {
//     containerChildren.forEach((child) => {
//       if (child.classList.contains('show-text')) {
//         child.classList.remove('show-text');
//         child.querySelector('.btn').innerHTML = '<i class="fas fa-plus"></i>';
//       }
//     });
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//     btn.innerHTML = '<i class="fas fa-minus"></i>';
//   });
// });

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.btn');
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
        // item.querySelector('.btn').innerHTML = '<i class="fas fa-plus"></i>';
      }
    });
    question.classList.toggle('show-text');
    // btn.innerHTML = '<i class="fas fa-minus"></i>';
  });
});

// const numbers = [10, 100, 50, 60, 80, 3];
// const sortedNumbers = numbers.sort((a, b) => a - b);

// let data = {
//   title: 'Title 1',
//   45: '45',
// };

// console.log(data['title']);

// const student = {
//   firstname: 'John',
//   lastname: 'Doe',
//   exams: {
//     midterm: 92,
//     final: 95,
//   },
// };

// console.log(student.exams.final, student['exams']['final']);

// let numbers = [1, 2, 3, 4, 5, 6];
// let mystery = [1, 2, 3, 4, 5];

// compare the two arrays here
// const compareArrays = (a, b) => {
//   if (a.length !== b.length) {
//     return false;
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(compareArrays(numbers, mystery));

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

function getCard(values, suits) {
  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  return { value: value, suit: suit };
}

console.log(getCard(values, suits));
