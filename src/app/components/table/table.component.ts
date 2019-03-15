import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: any[] = [
    { position: 1, name: 'Leny Churata', weight: 26, symbol: '15/07/93',sexo:'F', responsable:'Padre',medico:'Toledo Vargas',atencion:'Ginecologia' },
    { position: 2, name: 'Wyliam Velasquez', weight:26, symbol: '15/07/93',sexo:'F',responsable:'Madre',medico:'Fernando Ticona',atencion:'Medicina General' },
    { position: 3, name: 'Leonardo Rios', weight: 41, symbol: '15/07/71',sexo:'M',responsable:'Esposa',medico:'Leonardo Aliaga',atencion:'Rinoplastia' },
    { position: 4, name: 'Frigida Carbajal', weight:22, symbol: '15/07/96',sexo:'M',responsable:'Hermano',medico:'Toledo Vargas',atencion:'Ginecologia' },
    { position: 5, name: 'Miguel Toledo', weight:81, symbol: '15/07/46',sexo:'F',responsable:'Hijo',medico:'Alan Brito',atencion:'Medicina General' },
    { position: 6, name: 'Edwin Vargas', weight: 27, symbol: '15/07/87',sexo:'F',responsable:'Esposo',medico:'Hugo Mendoza',atencion:'Medicina General' },
    { position: 7, name: 'Noemi Poma', weight:67, symbol: '15/07/50',sexo:'M',responsable:'Madre',medico:'Toledo Vargas',atencion:'Ginecologia' },
    { position: 8, name: 'Andrea Quiroga', weight: 42, symbol: '15/07/76',sexo:'F',responsable:'Abuelo',medico:'Alici Yampaci',atencion:'Laboratorio' },
    { position: 9, name: 'Franz Marca', weight: 24, symbol: '15/07/95',sexo:'M',responsable:'Tio',medico:'Hugo Mendoza',atencion:'Medicina General' },
    { position: 10, name: 'Luis Marca', weight: 37, symbol: '15/07/75',sexo:'F',responsable:'Hermana',medico:'Fernando Ticona',atencion:'Medicina General' },
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();;
  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','sexo','responsable','medico','atencion'];

  ngOnInit() {
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
