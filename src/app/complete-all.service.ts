import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResults } from './interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class CompleteAllService {

  complete(){
    return this.http.post<IResults>('http://localhost:4201/todos', {completed: true});
  }
  constructor(private http: HttpClient) { }
}
