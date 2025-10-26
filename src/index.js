import App from './App.js';
import { Game } from './domain/Game.js';
import { Display } from './domain/Display.js';

const game = new Game();
const display = new Display();

const app = new App(game, display);
await app.run();
