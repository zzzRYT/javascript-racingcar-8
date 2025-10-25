import App from './App.js';
import { Game } from './domain/Game.js';
import { View } from './domain/View.js';

const game = new Game();
const view = new View();

const app = new App(game, view);
await app.run();
