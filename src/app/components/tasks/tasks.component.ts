import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  myTask: any
  TaskFound: any

  constructor(private listServ : TasksService) { }

  ngOnInit(): void {
  }

  getPositions($event: any){
    this.myTask = this.listServ.getOneTask($event)
    this.TaskFound = this.myTask
  }

  editTask() {
    this.listServ.editTask(this.TaskFound)
  }

}
