import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResults } from './interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  remove(id){
    return this.http.post<IResults>('http://localhost:4201/todos', {id, remove: true});
  }
  
  removeAll(){
    return this.http.post<IResults>('http://localhost:4201/todos', {remove: true});
  }

  get(){
    return this.http.get<IResults>('http://localhost:4201/todos');
  }
  
  complete(id){
    return this.http.post<IResults>('http://localhost:4201/todos', {completed: true, id});
  }

  completeAll(){
    return this.http.post<IResults>('http://localhost:4201/todos', {completed: true});
  }
  
  addTodo(task){
    return this.http.post<IResults>('http://localhost:4201/todos', {task});
  }
}
