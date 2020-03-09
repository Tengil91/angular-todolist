import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResults } from './interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class RemoveAllService {

  remove(){
    return this.http.post<IResults>('http://localhost:4201/todos', {remove: true});
  }
  constructor(private http: HttpClient) { }
}
