import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResults } from './interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class AddTodoService {

  postTodo(task){
    return this.http.post<IResults>('http://localhost:4201/todos', {task});
  }
  constructor(private http: HttpClient) { }
}
