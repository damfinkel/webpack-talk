import memes from './memes'
import './styles.scss'

const button = document.getElementById('fact-button');
const memeContainer = document.getElementById('meme-container');

button.onclick = () => {
  const index = Math.floor(Math.random()*memes.length);
  const meme = memes[index];

  const titleElement = document.createElement('h2');
  titleElement.classList.add('meme-title');
  const imgElement = document.createElement('img');

  titleElement.textContent = meme.name;
  imgElement.src = meme.img;
  imgElement.classList.add('meme-image');

  // remove all children
  memeContainer.innerHTML = "";

  memeContainer.appendChild(titleElement);
  memeContainer.appendChild(imgElement);
}
