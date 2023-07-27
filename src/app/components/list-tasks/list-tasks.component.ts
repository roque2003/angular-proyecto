import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/Taks'
import { TasksService } from '../../services/task.service'

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Output() sendPosition = new EventEmitter

  myTasks: Task[] = [];

  constructor(private listServ : TasksService) { }

  ngOnInit(): void {
    this.myTasks = this.listServ.getTasks()
    console.log("problemas:" , this.myTasks)
  }

  deleteTask(_id: number) {
    this.listServ.deleteTask(_id)
  }

  getPositions(_id: number) {
    this.sendPosition.emit(_id)
  }

}
