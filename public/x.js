const backgroundContainer = document.getElementById('background-container');
const card = document.querySelector('.card');

function createBackgroundImage(imageUrl, size) {
  const backgroundImage = document.createElement('div');
  backgroundImage.classList.add('background-image');
  backgroundImage.style.backgroundImage = `url('${imageUrl}')`;
  backgroundImage.style.width = `${size}px`;
  backgroundImage.style.height = `${size}px`;
  backgroundImage.style.top = `${Math.random() * (window.innerHeight - size)}px`;
	backgroundImage.style.left = `${Math.random() * (window.innerWidth - size)}px`;
	backgroundImage.style.opacity = `${Math.random()* 0.8}`;
  return backgroundImage;
}

function addBackgroundImages(count, imageUrl, size) {
  for (let i = 0; i < count; i++) {
    const backgroundImage = createBackgroundImage(imageUrl, size);
    backgroundContainer.appendChild(backgroundImage);
  }
}

function changeBackgroundImages(imageUrl, size) {
  const backgroundImages = document.querySelectorAll('.background-image');
  backgroundImages.forEach(backgroundImage => {
    backgroundImage.style.backgroundImage = `url('${imageUrl}')`;
    backgroundImage.style.width = `${size}px`;
    backgroundImage.style.height = `${size}px`;
  });
}

addBackgroundImages(33, 'v.png', 150);

// Change background images when the card is hovered over
card.addEventListener('mouseenter', () => {
  changeBackgroundImages('v2.png', 150);
});

card.addEventListener('mouseleave', () => {
  changeBackgroundImages('v.png', 150);
});