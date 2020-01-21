import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pageTitle:string = 'WHAT I\'VE DONE';

  constructor() { }

  ngOnInit() {
  }

}
