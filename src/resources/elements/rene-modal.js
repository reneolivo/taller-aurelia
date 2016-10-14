import {bindable} from 'aurelia-framework';
import jQuery from 'jquery';

export class ReneModal {
  @bindable autoOpen = false;

  attached() {
    this.modal = jQuery(this.modalTag).modal({
      show: this.autoOpen
    });
  }

  open() {
    this.modal.modal('show');
  }

  close() {
    this.modal.modal('hide');
  }
}
