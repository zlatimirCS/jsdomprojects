// local reviews data
const persons = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'nemanja mitrovic',
    job: 'the dev',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'asdasd asda sdas dasd asd asd asd asda sd asda',
  },
];

// let numberOfItems = 2;

// window.addEventListener('DOMContentLoaded', function () {
//   // for each person in the array, create a new div with the class person, and only first two items to have class active
//   persons.forEach(function (person) {
//     const div = document.createElement('div');
//     div.classList.add('person');
//     div.innerHTML = `
//     <img src="${person.img}" alt="${person.name}" class="person-img">
//     <h4 class="person-name">${person.name}</h4>
//     <h4 class="person-job">${person.job}</h4>
//     <p class="person-text">${person.text}</p>
//     `;
//     document.querySelector('.persons').appendChild(div);
//   });
//   for (let i = 0; i < numberOfItems; i++) {
//     document.querySelector('.persons').children[i].classList.add('active');
//   }
// });

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// nextBtn.addEventListener('click', function () {
//   // get the active class to next sibling and remove it from the previous one
//   // if last element is active, return to the first one
//   if (
//     document
//       .querySelector('.persons')
//       .lastElementChild.classList.contains('active')
//   ) {
//     document.querySelectorAll('.active').forEach(function (active) {
//       active.classList.remove('active');
//     });
//     document
//       .querySelector('.persons')
//       .prepend(document.querySelector('.persons').lastElementChild);
//     document.querySelector('.persons').children[0].classList.add('active');
//     document.querySelector('.persons').children[1].classList.add('active');
//     return;
//   }
//   const active = document.querySelectorAll('.active');
//   active[0].classList.remove('active');
//   active[1].nextElementSibling.classList.add('active');
// });

let currentItem = 0;

let personImg = document.querySelector('.person-img');
let personName = document.querySelector('.person-name');
let personJob = document.querySelector('.person-job');
let personText = document.querySelector('.person-desc');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let random = document.querySelector('.random');

const showPerson = (person) => {
  const item = persons[person];
  personImg.src = item.img;
  personName.textContent = item.name;
  personJob.textContent = item.job;
  personText.textContent = item.text;
};

nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > persons.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = persons.length - 1;
  }
  showPerson(currentItem);
});

random.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * persons.length);
  showPerson(currentItem);
});
