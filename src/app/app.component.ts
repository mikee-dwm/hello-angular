import { Component, computed } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { DUMMY_TASKS } from './dummy-tasks';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks = DUMMY_TASKS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.idUser === this.selectedUserId);
  }

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId);
  }
}
