import {inject, bindable} from 'aurelia-framework';
import Pixabay from './services/pixabay';

@inject(Pixabay)
export class App {
  @bindable search = 'Cats';
  selectedCat = {};

  constructor(pixabay: Pixabay) {
    this.pixabay = pixabay;

    this.executeSearch();
  }

  searchChanged() {
    this.executeSearch();
  }

  executeSearch() {
    this.pixabay.search(this.search)
    .then((results) => results.hits)
    .then((cats) => cats.slice(0, 20))
    .then((cats) => this.cats = cats);
  }

  openCat(cat) {
    this.selectedCat = cat;
    this.reneModal.open();
  }
}
