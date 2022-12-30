import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';

  constructor() {}

  // LIFE CYCLE METHOD (GOOD FOR FETCHING DATA)
  ngOnInit(): void {
      
  }

  toggleAddTask() {
    console.log('Add...');
  }
}
