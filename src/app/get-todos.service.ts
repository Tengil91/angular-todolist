import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IResults } from "./interfaces/result";

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  getTodos(){
    return this.http.get<IResults>('http://localhost:4201/todos');
  }
  constructor(private http: HttpClient) { }
}
