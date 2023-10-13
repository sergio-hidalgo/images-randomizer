const container = document.querySelector('.content');

/* 
const jsonObject = 'data/data.json';

function getData() {
  const listImg = [];

  fetch(jsonObject)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        listImg.push(element.url);
      });

      console.log(listImg);
    });

  return listImg;
} 

const objectSet = getData();

*/

const objectSet = [
  [1, 'images/img1.jpg', 'The Alps', 'Switzerland'],
  [2, 'images/img2.jpg', 'Atacama desert', 'Chile'],
  [3, 'images/img3.jpg', 'Bruges street', 'Belgium'],
  [4, 'images/img4.jpg', 'Cape Town cliff', 'South Africa'],
  [5, 'images/img5.jpg', 'Dubrovnik bay', 'Croatia'],
  [6, 'images/img6.jpg', 'Marrakesh souk', 'Morocco'],
  [7, 'images/img7.jpg', 'Koh Tao beach', 'Thailand'],
  [8, 'images/img8.jpg', 'Kyoto palace', 'Japan'],
  [9, 'images/img9.jpg', 'Mount Cook', 'New Zealand'],
  [10, 'images/img10.jpg', 'Madrid Gran Via', 'Spain'],
  [11, 'images/img11.jpg', 'Montevideo square', 'Uruguay'],
  [12, 'images/img12.jpg', 'Hidden waterfall', 'Laos'],
];

const setObj = randomSetObjects(objectSet, 8);
const rows = 2;
const columns = 4;

for (let i = 0; i < rows * columns; i++) {
  const div = document.createElement('div');
  div.className = 'imageWrapper';

  const img = document.createElement('img');
  img.src = `${setObj[i][1]}`;
  img.loading = 'lazy';
  div.appendChild(img);

  const title = document.createElement('h2');
  title.innerHTML = `${setObj[i][3]}`;
  div.appendChild(title);

  container.appendChild(div);
}

function randomSetObjects(set, n) {
  const randomSet = [...set]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, n);

  return randomSet;
}
