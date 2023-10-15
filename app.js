const container = document.querySelector('.content');
const dataPath = 'data/data.json';

async function getData() {
  try {
    return fetch(dataPath)
      .then((res) => res.json())
      .then((data) => data);
  } catch (error) {
    console.log(error);
  }
}

async function displayImages() {
  const objectSet = await getData();

  const setObj = randomSetObjects(objectSet, 6);
  const rows = 2;
  const columns = 3;

  for (let i = 0; i < rows * columns; i++) {
    const div = document.createElement('div');
    div.className = 'imageWrapper';

    const img = document.createElement('img');
    img.src = `${setObj[i].url}`;
    img.loading = 'lazy';
    div.appendChild(img);

    const place = document.createElement('h3');
    place.innerHTML = `${setObj[i].name}`;
    div.appendChild(place);

    const country = document.createElement('h2');
    country.innerHTML = `${setObj[i].country}`;
    div.appendChild(country);

    container.appendChild(div);
  }
}

function randomSetObjects(set, n) {
  const randomSet = [...set]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, n);

  return randomSet;
}

displayImages();
