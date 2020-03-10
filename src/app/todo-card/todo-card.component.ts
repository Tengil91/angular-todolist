import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo;
  @Output() completedTaskEmitter = new EventEmitter();
  @Output() removeTaskEmitter = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  completedTask(){
    this.completedTaskEmitter.emit(this.todo.id);
  }
  removeTask(){
    this.removeTaskEmitter.emit(this.todo.id);
  }
}
