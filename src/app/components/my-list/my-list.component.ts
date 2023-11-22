import { Component } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {
    public flag_completed: Boolean =  false
    private flag_current: Boolean = false
    private flag_future: Boolean = false

    public items: any[] = [
      {
        ctx: "完成",
        status: "completed"
      },
      {
        ctx: "进行中",
        status: "current"
      },
      {
        ctx: "未到达",
        status: "future"
      }
    ]

    getColor(status: string): "red" | "blue" | "green" | "grey" | "gray" {
      if (status === 'completed') {
        return 'red';
      } else if (status === 'current') {
        return 'blue';
      } else if (status === 'future') {
        return 'green';
      } else {
        return 'gray';
      }
    }

}
