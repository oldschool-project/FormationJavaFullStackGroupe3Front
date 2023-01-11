import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss'],
})
export class PageListUsersComponent {
  public collection$: Observable<User[]>;
  public headers: string[];

  constructor(private usersService: UsersService, private router: Router) {
    this.collection$ = this.usersService.collection$;
    this.headers = ['', 'Nom', 'id', ''];
  }

  public goToEdit(id: number): void {
    this.router.navigate(['users', 'edit', id]);
  }
  public goToUser(id: number): void {
    this.router.navigate(['users', id]);
  }
  public delete(id: number): void {}
}
