import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  datoUserP: Login = {
    user: 'Rome',
    password: '1234'
  } ;

  constructor(
    private formB: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.form = this.formB.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    console.log('estos son los datos',this.form.value);
    if(this.form.value.user == this.datoUserP.user && this.form.value.password == this.datoUserP.password){
      console.log('si existe usuario');
    } else {
      console.log('no existe usuario');
    }
  }
}

    //*operadores logicos en typescript
    // *&& = y
    // *|| = o
    // * < = menor que
    // * > = mayor que
    // * <= = menor o igual que
    // * >= = mayor o igual que
    // * == = igual que
    // * != = diferente que
    // * === = igual que y del mismo tipo
    // * !== = diferente que y del mismo tipo
    // ! = negacion

    //*Dos tipos de igualdad
    // * = = asignacion de la variable
    // * == = comparacion de la variable por ejemplo 1 == "1"
    // * === = comparacion de la variable del mismo tipo 1 === 1


        // if(this.datoUserP.user == this.form.value.user){
    //   console.log('si usuario igual');
    // } else{
    //   console.log('no usuario igual');
    // }
