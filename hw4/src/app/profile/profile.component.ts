import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name: string;
  public favmovie: string;

  constructor(private profileService: ProfileService) {
    this.name = '';
    this.favmovie = '';
  }

  ngOnInit() {
  }

  private addUser(): void{
    this.profileService.addUser(this.name, this.favmovie);
    this.name = '';
    this.favmovie = '';

  }

}
