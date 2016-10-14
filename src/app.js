import {inject} from 'aurelia-framework';
import Pixabay from './services/pixabay';

@inject(Pixabay)
export class App {
  selectedCat = {};

  constructor(pixabay: Pixabay) {
    this.pixabay = pixabay;
    this.message = 'Hello Cats!';

    this.getAllTheCats();
  }

  getAllTheCats() {
    this.pixabay.search('cats')
    .then((results) => results.hits)
    .then((cats) => cats.slice(0, 20))
    .then((cats) => this.cats = cats);
  }

  openCat(cat) {
    this.selectedCat = cat;
    this.reneModal.open();
  }
}
