import {inject} from 'aurelia-framework';
import Pixabay from './services/pixabay';

@inject(Pixabay)
export class App {
  constructor(pixabay: Pixabay) {
    this.pixabay = pixabay;
    this.message = 'Hello Cats!';
  }
}
