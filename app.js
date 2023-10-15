const container = document.querySelector('.content');
const dataPath = './data/data.json';

async function getData() {
  return fetch(dataPath)
    .then((data) => data.json());
}

async function createImageTiles() {
  const objectSet = await getData();

  const setObj = randomSetObjects(objectSet, 8);
  const rows = 2;
  const columns = 4;

  for (let i = 0; i < rows * columns; i++) {
    const div = document.createElement('div');
    div.className = 'imageWrapper';

    const img = document.createElement('img');
    img.src = `${setObj[i].url}`;
    img.loading = 'lazy';
    div.appendChild(img);

    const title = document.createElement('h2');
    title.innerHTML = `${setObj[i].country}`;
    div.appendChild(title);

    container.appendChild(div);
  }
}

function randomSetObjects(set, n) {
  const randomSet = [...set]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, n);

  return randomSet;
}

createImageTiles();