import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-buttons',
  templateUrl: './todo-buttons.component.html',
  styleUrls: ['./todo-buttons.component.css']
})
export class TodoButtonsComponent implements OnInit {

  @Output() completedAllEmitter = new EventEmitter();
  @Output() removeAllEmitter = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  completedAll(){
    this.completedAllEmitter.emit();
  }
  removeAll(){
    this.removeAllEmitter.emit();
  }
}
