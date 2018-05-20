import { Component } from '@angular/core';
import { Task, StatusType} from '../constants';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  private statusList = [StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];
  showForm = false;
  taskList: Task[] = [];
  changeValueForm(){
    this.showForm = !this.showForm;
  }
  constructor(private taskService: TaskService) {}
  ngOnInit(){

  }

  saveTasks(card){
    this.taskService.addTask(card.title, card.description);
  }

}
