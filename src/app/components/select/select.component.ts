import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'pollos-3', viewValue: 'Pollos Copacabana'},
    {value: 'salchipapa-4', viewValue: 'Salchipapa'},
    {value: 'alitas-de-pollo-5', viewValue: 'Alitas de pollo'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
