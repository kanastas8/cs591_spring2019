import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {

  }

  name: string;
  favmovie: string;

  addUser(){
    console.log('In addUser ${this.name}');
    const newUser: USER = {
      name: this.name,
      favmovie: this.favmovie
    };
  }

}


