import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  pageTitle: string = 'WHAT I\'VE LEARNT';

  constructor() { }

  ngOnInit() {
  }

}
