import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}
  events: string[] = [];
  opened: boolean;
  APP_TOOLBAR_TITLE = 'angular material studyjam GDG LA PAZ';
  MY_WORK = 'angular material studijam GDG LA PAZ';

  public nav(x){
    this.router.navigateByUrl('/'.concat(x));
  }
}
