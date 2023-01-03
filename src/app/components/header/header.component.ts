import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  showAddTask:boolean = false;

  constructor(private uiService: UiService) {}

  // LIFE CYCLE METHOD (GOOD FOR FETCHING DATA)
  ngOnInit(): void {
    this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
