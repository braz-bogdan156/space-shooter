import { createSpaceship } from './objects/spaceship.js';
import {createAsteroids} from './objects/asteroid.js';
import {manageAsteroids} from './processes/manageAsteroids.js';
import {startGameTimer} from './processes/startGameTimer.js';
import {endGame} from './processes/endGame.js'

const app = new PIXI.Application({
  width: 1280,
  height: 720,
});

document.body.appendChild(app.view);

// Створюємо текстуру для фонового зображення
const backgroundTexture = PIXI.Texture.from('assets/images/stairs.png');

// Створюємо спрайт для фонового зображення
const background = new PIXI.Sprite(backgroundTexture);
background.width = app.screen.width;
background.height = app.screen.height;

// Додаємо фонове зображення до сцени
app.stage.addChild(background);



// Створюємо корабель
const spaceship = createSpaceship(app);

const asteroids = createAsteroids (app , 10)


manageAsteroids(app, spaceship, asteroids, (message) => endGame(app, message));

// Запускаємо таймер гри
startGameTimer(60, () => {
  if (asteroids.length > 0) {
      endGame("YOU LOSE");
  } else {
      endGame("YOU WIN");
  }
});