import { Component } from '@angular/core';
import { TasksService } from '../../services/task.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  myId = 4

  newTask = {
    id : this.myId,
    dispositivo : '',
    problema : ''
  }


  constructor(private ListServ: TasksService) { }

  addTask() {
    console.log("envio info" , this.newTask)
    this.ListServ.addTask(this.newTask)
    this.myId ++;
    this.newTask = {
      id: 0,
      dispositivo: '',
      problema: ''
    }
  }

}
