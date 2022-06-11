import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AgregarComponent } from './agregar.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AgregarComponent);
  }

  ngOnInit(): void {
  }

}
