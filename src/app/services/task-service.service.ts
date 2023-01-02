import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  herders: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

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
  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  // TOGGLE TASK
  updateTaskReminder(task: Task): Observable<Task> {

    const url = `${this.apiUrl}/${task.id}`;

    const newTask = {
      ...task,
      reminder: !task.reminder,
    };

    return this.httpClient.put(url, newTask) as Observable<Task>;
  }

  // CREATE TASK
  createTask(task: Task): Observable<Task> {
    return this.httpClient.post(this.apiUrl, task) as Observable<Task>;
  }
}
