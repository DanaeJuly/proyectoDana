import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  items: any[];
  foto: any = '';
  answer = '';

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
  }

  api() {
    this.foto = '';
    this.httpClient.get<any>('https://yesno.wtf/api/').subscribe(result => {
      this.answer = result.answer;
      this.foto = result.image;
    });
  }
}
