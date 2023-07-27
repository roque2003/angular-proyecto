import { Injectable } from '@angular/core';
import { Task } from '../models/Taks'

const TaskList = [
  {
    "id" : 1,
    "dispositivo" : "macbook",
    "problema" : "no enciende"
  },
  {
    "id" : 2,
    "dispositivo" : "ps5",
    "problema" : "corre muy lento"
  },
  {
    "id" : 3,
    "dispositivo" : "iphone10",
    "problema" : "no funciona camara"
  },
]

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  constructor() { }

  getTasks(){
    return TaskList;
  }

  getOneTask(_id: number) {
    return TaskList.find(task => task.id === _id)
  }

  addTask(task : Task) {
    TaskList.push(task);
  }

  editTask(newTaskEdit: any){
    const index = TaskList.findIndex(task => task.id == newTaskEdit.id)
    TaskList[index] = newTaskEdit;
  }

  deleteTask(_id: number) {
    TaskList.splice(_id, 1)
  }

}
