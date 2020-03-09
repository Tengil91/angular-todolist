import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResults } from './interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class CompleteTodoService {
  complete(id){
    return this.http.post<IResults>('http://localhost:4201/todos', {completed: true, id});
  }
  constructor(private http: HttpClient) { }
}
