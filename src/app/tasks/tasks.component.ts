import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = input.required<{ id: string; idUser: string; name: string }[]>();
  @Input() name?: string;
  // name = input<string>();
}
