import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
