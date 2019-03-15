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
  APP_TOOLBAR_TITLE = ' ESTA ES TU AGENDA DIA A DIA ';
  MY_WORK = ' vcdosuhvshdb';

  public nav(x){
    this.router.navigateByUrl('/'.concat(x));
  }
  
}
