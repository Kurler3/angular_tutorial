import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private httpClient: HttpClient) { }

  // GET TASKS
  getTasks(): Observable<Task[]> {
    return this.httpClient.get(this.apiUrl) as Observable<Task[]>;
  }

  // DELETE TASK
  deleteTask(taskId: number):void {
    this.httpClient.delete(this.apiUrl);
  }
}
