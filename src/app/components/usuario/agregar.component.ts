import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.interface';
import { RoleService } from 'src/app/services/role.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  roles: Role[] = [];
  activo: String[] = ['A','B'];
  form_usuario_nuevo: FormGroup;
  usuarios: Usuario[] = [];

  constructor(private service_rol:RoleService,
    public form:FormBuilder,
    private service_usuario:UsuarioService
    ) {

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
    if(this.form_usuario_nuevo.valid){
      this.service_usuario.saveUsuario(this.form_usuario_nuevo.value).subscribe(res=>{
        this.mensaje_succes('Se ha registrado el usuario');
        this.form_usuario_nuevo.reset();
      });
      console.log(this.form_usuario_nuevo.value);
    }else{
      this.mensaje_error('Error al registrar usuario')
    }    
  }

  mensaje_succes(text:String){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  mensaje_error(text:String){
    Swal.fire({
      icon: 'error',
      title: text,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

}
