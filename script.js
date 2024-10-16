const backgroundImage = document.querySelector('body').style.backgroundImage;
const brightness = getBrightness(backgroundImage);
document.querySelector('body').dataset.brightness = brightness;

function getBrightness(backgroundImage) {
  const img = new Image();
  img.src = backgroundImage;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  let brightness = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    brightness += pixels[i] + pixels[i + 1] + pixels[i + 2];
  }
  brightness /= pixels.length / 4;
  if (brightness > 127) {
    return 'bright';
  } else {
    return 'dark';
  }
}
// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Add event listeners to each gallery item
galleryItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    // Add animation class to the item
    item.classList.add('animate');
  });

  item.addEventListener('mouseout', () => {
    // Remove animation class from the item
    item.classList.remove('animate');
  });
});

// yet to be added