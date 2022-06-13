import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from './agregar.component';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public dialog: MatDialog, 
    private service_usuairo:UsuarioService,
    ) { }

  openDialog() {
    this.dialog.open(AgregarComponent);
  }

  ngOnInit(): void {
  }

  

}
