import { Component, OnInit } from '@angular/core';
import { GetTodosService } from '../get-todos.service';
import { RemoveTodoService } from '../remove-todo.service';
import { AddTodoService } from '../add-todo.service';
import { CompleteTodoService } from '../complete-todo.service';
import { RemoveAllService } from '../remove-all.service';
import { CompleteAllService } from '../complete-all.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  getTodos(){
    this._getTodos.getTodos().subscribe(data => {
      this.todos = data.todos;
    })
  }
  addTodo(task: string){
    this._addTodos.postTodo(task).subscribe(data => {
      this.todos = data.todos;
    });
  }
  removeTask(id: number){
    this._removeTodos.remove(id).subscribe(data => {
      this.todos = data.todos;
    });
  }
  completedTask(id: number){
    this._completedTask.complete(id).subscribe(data => {
      this.todos = data.todos;
    });
  }
  removeAll(){
    this._removeAll.remove().subscribe(data => {
      this.todos = data.todos;
    });
  }
  completedAll(){
    this._completeAll.complete().subscribe(data => {
      this.todos = data.todos;
    });
  }
  todos = [
    {
      id: 0,
      task: "göra en todolist",
      completed: true
    }
  ];
  constructor(
    private _getTodos: GetTodosService,
    private _addTodos: AddTodoService,
    private _removeTodos: RemoveTodoService,
    private _completedTask: CompleteTodoService,
    private _removeAll: RemoveAllService,
    private _completeAll: CompleteAllService
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

}
