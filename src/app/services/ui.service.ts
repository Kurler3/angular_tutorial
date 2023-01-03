import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;

  private subject = new Subject<boolean>();
  
  constructor() {}

  // TOGGLE SHOW ADD TASK
  toggleAddTask():void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // ON TOGGLE
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
