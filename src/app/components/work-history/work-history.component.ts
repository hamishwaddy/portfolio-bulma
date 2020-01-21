import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  pageTitle:string = 'WHERE I\'VE WORKED';
   
  constructor() { }

  ngOnInit() {
  }

}
