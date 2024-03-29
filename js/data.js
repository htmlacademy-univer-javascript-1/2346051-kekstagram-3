import {getRandomPositiveInteger} from './util.js';

const DESCRIPTIONS  = ['it is me', 'my family', 'me and my friends', 'my work', 'sunny day'];

function createImgDescriptions (number) {
  const photos = new Array(number);
  for (let i = 1; i <= photos.length; i++) {
    photos[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS [getRandomPositiveInteger(0, 4)],
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    };
  }
  return photos;
}

export {createImgDescriptions};
