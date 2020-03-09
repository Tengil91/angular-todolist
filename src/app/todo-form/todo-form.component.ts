import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodoEmitter = new EventEmitter<string>();
  inputText = '';
  addTodo(){
    if(this.inputText.length > 0){
      this.addTodoEmitter.emit(this.inputText);
      this.inputText = '';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
