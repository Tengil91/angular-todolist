import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResults } from './interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class RemoveTodoService {
  remove(id){
    return this.http.post<IResults>('http://localhost:4201/todos', {id, remove: true});
  }
  constructor(private http: HttpClient) { }
}
