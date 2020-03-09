export interface ITodo {
    task: string,
    completed: boolean,
    id: number
  }
  export interface IResults {
    todos: ITodo[]
  }