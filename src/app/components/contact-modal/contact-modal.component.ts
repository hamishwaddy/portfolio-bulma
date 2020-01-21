import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  isModalActive = true;

  location = {
    phoneNumber: '+6421844772'
  }

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive
  }

  onCloseModal() {
    this.backClicked();
    this.isModalActive = false;
  }
  
}