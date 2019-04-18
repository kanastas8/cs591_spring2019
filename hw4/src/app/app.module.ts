import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MovieComponent } from './movie/movie.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './services/profile.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MovieComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
