import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.interface';
import { RoleService } from 'src/app/services/role.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  roles: Role[] = [];
  activo: String[] = ['A','B'];
  form_usuario_nuevo: FormGroup;

  constructor(private service_rol:RoleService,public form:FormBuilder) {

    this.form_usuario_nuevo = form.group({
      id_rol:['',Validators.required],
      nombre:['',Validators.required],
      activo:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])]
    });

   }

  ngOnInit(): void {
    this.listar_roles();
  }

  listar_roles(){
    this.service_rol.getRoles().subscribe(res=>{
      this.roles = res;
      console.log(this.roles);
    });
  }


  save_usuario(){
    console.log(this.form_usuario_nuevo.value);
  }

}
