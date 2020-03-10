import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = [
    {
      id: 0,
      task: "göra en todolist",
      completed: true
    }
  ];
  
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.get().subscribe(data => {
      this.todos = data.todos;
    })
  }
  addTodo(task: string){
    this.todoService.addTodo(task).subscribe(data => {
      this.todos = data.todos;
    });
  }
  removeTask(id: number){
    this.todoService.remove(id).subscribe(data => {
      this.todos = data.todos;
    });
  }
  completedTask(id: number){
    this.todoService.complete(id).subscribe(data => {
      this.todos = data.todos;
    });
  }
  removeAll(){
    this.todoService.removeAll().subscribe(data => {
      this.todos = data.todos;
    });
  }
  completedAll(){
    this.todoService.completeAll().subscribe(data => {
      this.todos = data.todos;
    });
  }
}
