import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive
  }

  onCloseModal() {
    this.isModalActive = false;
  }
  
}