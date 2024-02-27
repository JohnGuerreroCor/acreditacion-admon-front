import { Component, ViewChild, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoService } from 'src/app/services/foto.service';
import { DatePipe } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
  ],
})
export class ProgramasComponent {
  periodo: string = '';
  sede: any;
  nivelFormacion: any;
  nivelAcademico: any;
  dependencia: any;
  programa: number = 0;
  noInformacion: boolean = false;
  precarga: boolean = true;
  buscador: boolean = false;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'index',
    'periodo',
    'sede',
    'nivelFormacion',
    'nivelAcademico',
    'dependencia',
    'programa',
    'estudianteCodigo',
    'informacion',
  ];
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public fotoService: FotoService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  obtenerNivelesAcademicos(element: any) {}

  obtenerProgramas() {
    this.programa = 0;
    this.dataSource = new MatTableDataSource<any>([]);
    this.noInformacion = false;
    this.precarga = true;
  }

  obtenerListadoEgresadosFacultad() {
    this.noInformacion = true;
    this.precarga = false;
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
