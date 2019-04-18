import { Injectable } from '@angular/core';
import {User} from '../users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private users: User[];

  constructor() {}

  public addUser(name: string, favmovie: string): void{
    let user = new User(name, favmovie);
    let users = this.getUsers();
    this.users.push(user);
    this.setLocalStorageUsers(users);
  }

  public getUsers(): User[] {
    const localStorageItem = JSON.parse(localStorage.getItem('users'));
    return localStorageItem == null ? [] : localStorageItem.users;
  }

  public setLocalStorageUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify( {users: users}));
  }

}
